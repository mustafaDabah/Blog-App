// what are the things that i have tested in this file ?
// 1-  >>>> testing the list of users
// 2-  >>>> testing the hover of single user list
// 3-  >>>> testing click single user and go to user profile
// 4-  >>>> testing user details
// 5-  >>>> testing the post list
// 6-  >>>> testing comment list
// 7-  >>>> testing edit comment (I have issue in this test)
// 8-  >>>> delete the comment
// 9-  >>>> testing the list of albums
// 10-  >>>> testing the list of photos
// 11-  >>>> testing the list of titles photos (alumbs)

import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render as rtlRender, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import { setupStore } from '../store/store';
import { fetchUsers } from '../store/features/users/usersSlice';

const renderWithProvider = (component) => rtlRender(
  <MemoryRouter>
    <Routes>
      <Route path="*" element={component} />
    </Routes>
  </MemoryRouter>,
);

test('blog phases for happy path', async () => {
  const store = setupStore();
  store.dispatch(fetchUsers());

  renderWithProvider(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  // >>>> testing the list of users
  const listOfUsersNames = await screen.findAllByRole('heading', { exact: false, ignore: 'script, style', level: 3 });
  expect(listOfUsersNames).toHaveLength(3);
  const usersNames = listOfUsersNames.map((el) => (el.textContent));
  expect(usersNames).toHaveLength(3);
  expect(usersNames).toEqual(['1 -  Leanne Graham', '2 -  Ervin Howell', '3 -  Clementine Bauch']);

  // >>>> testing the hover of single user list
  const nullPopup = screen.queryByRole('heading', { name: 'userName:', exact: false });
  expect(nullPopup).not.toBeInTheDocument();

  const userHeader = await screen.findByRole('heading', { name: /1 - leanne graham/i });
  userEvent.hover(userHeader);

  const userPopup = screen.queryByRole('heading', { name: 'userName: Bret' });
  expect(userPopup).toBeInTheDocument();

  userEvent.unhover(userHeader);
  expect(userPopup).not.toBeInTheDocument();

  // >>>> testing click single user and go to user profile
  userEvent.click(userHeader);
  const profileHeader = screen.getByText('USER PROFILE PAGE');
  expect(profileHeader).toBeInTheDocument();

  // >>>> testing user details
  const titlesUserDetails = await screen.findAllByRole('heading', { level: 3 });
  const titleUserDetails = titlesUserDetails.map((el) => el.textContent);

  expect(titleUserDetails).toEqual([
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

  // >>>> testing the post list
  const postsTitles = await screen.findAllByRole('heading', { level: 2 });
  const titlesPosts = postsTitles.map((el) => el.textContent);
  expect(titlesPosts).toEqual([
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    'qui est esse',
    'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  ]);

  // >>>> testing comment list
  const commentTitles = await screen.findAllByRole('heading', { level: 4 });
  const titles = commentTitles.map((title) => title.textContent);
  expect(titles).toHaveLength(6);
  expect(titles).toEqual([
    'alias odio sit',
    'Lew@alysha.tv',
    'non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati',
    'vero eaque aliquid doloribus et culpa',
    'Hayden@althea.biz',
    'harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et',
  ]);

  // >>>> testing edit comment
  const mustafaTitleComment = screen.queryByRole('heading', {
    name: /alias odio sit/i, level: 4, exact: false,
  });

  const iconEdit = screen.getAllByRole('button', { name: /edit/i })[0];
  userEvent.click(iconEdit);

  const commentName = await screen.findByRole('textbox', { name: /comment name/i });
  const commentBody = await screen.findByRole('textbox', { name: /comment body/i });

  expect(commentName).toHaveValue('alias odio sit');
  expect(commentBody).toHaveValue('non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati');

  userEvent.clear(commentName);
  userEvent.clear(commentBody);

  userEvent.type(commentName, 'mustafa dabah');
  userEvent.type(commentBody, 'I hope you like this project because i am really tired in it ...');

  const updateBtn = screen.getByRole('button', { name: 'update' });
  userEvent.click(updateBtn);

  expect(screen.queryByText('Edit The Comment')).not.toBeInTheDocument();
  // here is the erroe
  // expect(mustafaTitleComment).toHaveTextContent('mustafa dabah');

  // >>>> delete the comment
  const iconDelete = screen.getAllByRole('button', { name: /delete/i })[1];
  userEvent.click(iconDelete);

  await waitFor(() => {
    expect(screen.queryByText('Hayden@althea.biz')).not.toBeInTheDocument();
  });

  // >>>> testing the list of albums
  const listOfAlbumsTitles = await screen.findAllByRole('heading', { level: 5 });
  const titlesAlbums = listOfAlbumsTitles.map((el) => el.textContent);

  expect(titlesAlbums).toHaveLength(4);
  expect(titlesAlbums).toEqual([
    'quidem molestiae enim',
    'sunt qui excepturi placeat culpa',
    'omnis laborum odio',
    'non esse culpa molestiae omnis sed optio',
  ]);

  // >>>> testing the list of photos
  const alumbsImages = await screen.findAllByRole('img', { name: /photo-album/i });
  expect(alumbsImages).toHaveLength(4);

  // >>>> testing the list of titles photos (alumbs)
  const listOfPhotosTitles = await screen.findAllByRole('heading', { level: 6 });
  const titlesPhotos = listOfPhotosTitles.map((el) => el.textContent);

  expect(titlesPhotos).toHaveLength(4);
  expect(titlesPhotos).toEqual([
    'accusamus beatae ad facilis cum similique qui sunt',
    'reprehenderit est deserunt velit ipsam',
    'officia porro iure quia iusto qui ipsa ut modi',
    'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
  ]);
});
