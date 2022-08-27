import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Collapse from '../Collapse';

test('testing title of collapse component', async () => {
  render(<Collapse title="user posts" />);
  // make sure the title content changes when click at the title
  const titleCollapse = screen.getByText('hidden user posts');
  expect(titleCollapse).toBeInTheDocument();

  userEvent.click(titleCollapse);
  expect(titleCollapse).toHaveTextContent('show');
  expect(titleCollapse).not.toHaveTextContent('hidden');
});
