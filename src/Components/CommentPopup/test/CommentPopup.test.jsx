import * as React from 'react';
import { render, screen } from '../../../test-utilities/renderConnected';
import CommentPopup from '../CommentPopup';

const singleCommentData = {
  body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  email: 'Eliseo@gardner.biz',
  id: 1,
  name: 'id labore ex et quam laborum',
  postId: 1,
};

test.only('testing the content of inputs', async () => {
  render(<CommentPopup comment={singleCommentData} closePopup={jest.fn()} />);

  const commentName = await screen.findByRole('textbox', { name: /comment name/i });
  const commentBody = await screen.findByRole('textbox', { name: /comment body/i });

  expect(commentName).toHaveValue('id labore ex et quam laborum');
  expect(commentBody).toHaveValue('laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium');
});
