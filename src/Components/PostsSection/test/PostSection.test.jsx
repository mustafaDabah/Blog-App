import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { render as rtlRender, screen } from '../../../test-utilities/renderConnected';
import PostSection from '../PostsSection';

const renderWithProvider = (component) => rtlRender(
  <MemoryRouter initialEntries={['/1']}>
    <Routes>
      <Route path="/:userId" element={component} />
    </Routes>
  </MemoryRouter>,
);

describe('testing posts list page all cases', () => {
  test('testing loading spinner', async () => {
    rtlRender(<PostSection />);
    // test the loading spinner
    const loadingElement = screen.getByTestId('loading-spinner');
    expect(loadingElement).toBeInTheDocument();

    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
      });
    });
  });

  test('testing the posts list', async () => {
    renderWithProvider(<PostSection />);

    // testing the titles and contents of posts
    const postsTitles = await screen.findAllByRole('heading', { level: 2 });
    const titles = postsTitles.map((el) => el.textContent);
    expect(titles).toEqual([
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      'qui est esse',
      'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    ]);

    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
      });
    });
  });

  test('testing the post list changes when search input change', async () => {
    renderWithProvider(<PostSection />);
    // when input is empty return all posts
    const inputBox = screen.getByPlaceholderText('search for post');
    const postsTitles = await screen.findAllByRole('heading', { level: 2 });

    userEvent.clear(inputBox);

    const titles = postsTitles.map((el) => el.textContent);
    expect(titles).toEqual([
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      'qui est esse',
      'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    ]);

    // when starts search
    userEvent.clear(inputBox);
    userEvent.type(inputBox, 'sunt');

    const postsTitlesWhenInputChange = await screen.findAllByRole('heading', { level: 2 });
    const newTitles = postsTitlesWhenInputChange.map((el) => el.textContent);

    expect(newTitles).toEqual([
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    ]);

    // when don't found anything
    userEvent.clear(inputBox);
    userEvent.type(inputBox, 'mmmmmm');

    const WrongText = screen.getByText('please search again with new good words');
    expect(WrongText).toBeInTheDocument();
  });
});
