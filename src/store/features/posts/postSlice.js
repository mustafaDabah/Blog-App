import { apiSlice } from '../../API/apiSlice.js';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (id) => `/posts/?userId=${id}`,
      providesTags: ['Posts'],
    }),
  }),

});

export const {
  useGetPostsQuery,

} = extendedApiSlice;
