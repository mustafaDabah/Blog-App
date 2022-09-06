import { apiSlice } from '../../API/apiSlice.js';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPhotosById: builder.query({
      query: (id) => `/photos?albumId=${id}`,
      providesTags: ['Albums'],
    }),

  }),

});

export const {
  useGetPhotosByIdQuery,

} = extendedApiSlice;
