import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { screen, render } from '../../../test-utilities/renderConnected';
import UserProfile from '../UserProfile';

test('testing the content of user profile component', async () => {
  render(
    <MemoryRouter initialEntries={['/1']}>
      <Routes>
        <Route path=":userId" element={<UserProfile />} />
      </Routes>
    </MemoryRouter>,
  );

  // get the all titles and make test on it
  const titles = await screen.findAllByRole('heading');
  const title = titles.map((el) => el.textContent);

  expect(title).toEqual([
    'Leanne Graham',
    '@Bret',
    'Email: Sincere@april.biz',
    'Phone: 1-770-736-8031 x56442',
    'Website: hildegard.org',
    'Company name: Romaguera-Crona',
    'City: Gwenborough',
    'Street: Kulas Light',
    'Suite: Apt. 556',
    'ZIB Code: 92998-3874',
  ]);
});
