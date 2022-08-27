import userEvent from '@testing-library/user-event';
import { deleteComment } from '../../../store/features/comments/commentsSlice';
import { setupStore } from '../../../store/store';
import { render, screen } from '../../../test-utilities/renderConnected';
import SingleComment from '../SingleComment';

const singleCommentData = {
  body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  email: 'Eliseo@gardner.biz',
  id: 1,
  name: 'id labore ex et quam laborum',
  postId: 1,
};

describe('testing the single component', () => {
  test('testing the name email and body to be in DOM', async () => {
    render(<SingleComment comment={singleCommentData} />);

    const allTitles = await screen.findAllByRole('heading', { level: 3 });
    const titles = allTitles.map((title) => title.textContent);
    expect(titles).toEqual([
      'id labore ex et quam laborum',
      'Eliseo@gardner.biz',
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    ]);
  });

  test('testing open and close popup', () => {
    render(<SingleComment comment={singleCommentData} />);

    const iconEdit = screen.getByRole('button', { name: /edit/i });
    userEvent.click(iconEdit);

    const titlePopup = screen.getByRole('heading', { name: 'Edit The Comment' });
    expect(titlePopup).toBeInTheDocument();

    const iconClose = screen.getByRole('button', { name: /close/i });
    userEvent.click(iconClose);

    expect(titlePopup).not.toBeInTheDocument();
  });

  test.only('delete the comment', async () => {
    const store = setupStore();
    store.dispatch(deleteComment(singleCommentData));

    render(<SingleComment comment={singleCommentData} />, { store });

    const deleteBtn = screen.getByRole('button', { name: /delete/i });
    const headerName = await screen.findByText('id labore ex et quam laborum');

    userEvent.click(deleteBtn);
    const deleteBt = screen.getByRole('button', { name: /delee/i });
    expect(headerName).not.toBeInTheDocument();
  });
});
