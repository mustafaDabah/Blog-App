import { MemoryRouter, Routes, Route } from 'react-router-dom';
// import { render as rtlRender, screen } from '@testing-library/react';
import { fetchAlbums } from '../../../store/features/albums/albumsSlice';
import { setupStore } from '../../../store/store';
import { render as rtlRender, screen, waitFor } from '../../../test-utilities/renderConnected';
import AlbumsList from '../AlbumsList';

const renderWithProvider = (component) => rtlRender(
  <MemoryRouter initialEntries={['/2']}>
    <Routes>
      <Route path="/:userId" element={component} />
    </Routes>
  </MemoryRouter>,
);

describe('testing Albums list', () => {
  test('testing albums list', async () => {
    const store = setupStore();
    store.dispatch(fetchAlbums());

    renderWithProvider(
      <AlbumsList />,
      { store },
    );

    waitFor(async () => {
      const albumsTitles = await screen.findAllByRole('heading', { level: 3 });
      const titles = albumsTitles.map((el) => el.textContent);
      expect(titles).toHaveLength(3);
    });
  });
});
