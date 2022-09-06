
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utilities/renderConnected';
import SinglePost from '../SinglePost';

const singlePostData = {
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  userId: 1,
};

test('testing the comment list data', async () => {
  render(<SinglePost post={singlePostData} />);

  // testing the component date
  const postTitles = await screen.findAllByRole('heading', { level: 2 });
  const singleTitlesPost = postTitles.map((title) => title.textContent);
  expect(singleTitlesPost).toEqual([
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  ]);

  // click at the button collapse to display the comments list
  const buttonCollapse = screen.getByRole('button', { name: 'show user commit' });
  userEvent.click(buttonCollapse);

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
});
