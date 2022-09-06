import { apiSlice } from '../../API/apiSlice.js';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users'],
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ['Users'],
    }),
  }),

});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,

} = extendedApiSlice;
