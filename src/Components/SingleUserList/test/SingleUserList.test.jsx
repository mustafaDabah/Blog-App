import userEvent from '@testing-library/user-event';
import { render as rtlRender, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SingleUserList from '../SingleUserList';

const singleUserData = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const renderWithProvider = (component) => rtlRender(
  <MemoryRouter initialEntries={['/1']}>
    <Routes>
      <Route path="/:userId" element={component} />
    </Routes>
  </MemoryRouter>,
);

describe('testing singleUserList page', () => {
  test('testing the single user name header', async () => {
    renderWithProvider(<SingleUserList item={singleUserData} />);

    // get the user name and make test to found it at DOM
    const userHeader = await screen.findByRole('heading', { name: /1 - leanne graham/i });
    expect(userHeader).toBeInTheDocument();
  });

  test('testing the single user details with popup', async () => {
    renderWithProvider(<SingleUserList item={singleUserData} />);

    // make sure the popup not at the DOM at the first
    const nullPopup = screen.queryByRole('heading', { name: 'userName:', exact: false });
    expect(nullPopup).not.toBeInTheDocument();

    // make sure the popup at the DOM  when hover at heading
    const userHeader = await screen.findByRole('heading', { name: /1 - leanne graham/i });
    userEvent.hover(userHeader);

    const userPopup = screen.queryByRole('heading', { name: 'userName: Bret' });
    expect(userPopup).toBeInTheDocument();

    // make sure the popup not at the DOM when unhover at heading
    userEvent.unhover(userHeader);
    expect(userPopup).not.toBeInTheDocument();
  });
});
