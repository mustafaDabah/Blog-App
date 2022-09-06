import { apiSlice } from '../../API/apiSlice.js';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAlbumsById: builder.query({
      query: (id) => `/albums?userId=${id}`,
      providesTags: ['Albums'],
    }),

  }),

});

export const {
  useGetAlbumsByIdQuery,

} = extendedApiSlice;
