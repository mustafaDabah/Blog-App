import { rest } from 'msw';
import UsersList from '../UsersList';
import { fetchUsers } from '../../../store/features/users/usersSlice';
import { setupStore } from '../../../store/store';
import { render, screen, waitFor, waitForElementToBeRemoved } from '../../../test-utilities/renderConnected';
import { server } from '../../../mocks/server';

describe('testing usersList page', () => {
  test.only('testing the error fetch data', async () => {
    server.resetHandlers(
      rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => res(ctx.status(500))),
    );

    render(<UsersList />);
    // get the alert when we have error at the data fetch
    Promise.all([
      waitFor(async () => {
        const alertWrong = await screen.findByText('Network Error');
        expect(alertWrong).toBeInTheDocument();
      }),
    ]);
  });

  test('testing loading spinner', () => {
    render(<UsersList />);
    // test the loading spinner
    const loadingElement = screen.getByTestId('loading-spinner');
    expect(loadingElement).toBeInTheDocument();

    Promise.all([
      waitForElementToBeRemoved(() => loadingElement),
    ]);
  });

  test('testing display the users list', async () => {
    const store = setupStore();
    store.dispatch(fetchUsers());
    render(<UsersList />, { store });

    // get the users list and make sure to find them at DOM
    const listOfUsersNames = await screen.findAllByRole('heading', { exact: false, ignore: 'script, style' });
    expect(listOfUsersNames).toHaveLength(3);
    const usersNames = listOfUsersNames.map((el) => (el.textContent));
    expect(usersNames).toHaveLength(3);
    expect(usersNames).toEqual(['1 -  Leanne Graham', '2 -  Ervin Howell', '3 -  Clementine Bauch']);
  });
});

