import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { fetchPosts } from '../../../store/features/posts/postSlice';
import { setupStore } from '../../../store/store';
import { render as rtlRender, screen } from '../../../test-utilities/renderConnected';
import PostSection from '../PostsSection';

const renderWithProvider = (component) => rtlRender(
  <MemoryRouter initialEntries={['/2']}>
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
    const store = setupStore();
    store.dispatch(fetchPosts());

    renderWithProvider(<PostSection />, { store });

    // testing the titles and contents of posts
    const postsTitles = await screen.findAllByRole('heading', { level: 2 });
    const titles = postsTitles.map((el) => el.textContent);
    expect(titles).toEqual([
      'dolorum ut in voluptas mollitia et saepe quo animi',
      'aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam',
      'voluptatem eligendi optio',
      'fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum',
    ]);

    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
      });
    });
  });

  test('testing the post list changes when search input change', async () => {
    const store = setupStore();
    store.dispatch(fetchPosts());

    renderWithProvider(<PostSection />, { store });
    // when input is empty return all posts
    const inputBox = screen.getByPlaceholderText('search for post');
    const postsTitles = await screen.findAllByRole('heading', { level: 2 });

    userEvent.clear(inputBox);

    const titles = postsTitles.map((el) => el.textContent);
    expect(titles).toEqual([
      'dolorum ut in voluptas mollitia et saepe quo animi',
      'aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam',
      'voluptatem eligendi optio',
      'fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum',
    ]);

    // when starts search
    userEvent.clear(inputBox);
    userEvent.type(inputBox, 'aut dicta');

    const postsTitlesWhenInputChange = await screen.findAllByRole('heading', { level: 2 });
    const newTitles = postsTitlesWhenInputChange.map((el) => el.textContent);

    expect(newTitles).toEqual([
      'dolorum ut in voluptas mollitia et saepe quo animi',
      'aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam',
    ]);

    // when don't found anything
    userEvent.clear(inputBox);
    userEvent.type(inputBox, 'mmmmmm');

    const WrongText = screen.getByText('please search again with new good words');
    expect(WrongText).toBeInTheDocument();
  });
});
