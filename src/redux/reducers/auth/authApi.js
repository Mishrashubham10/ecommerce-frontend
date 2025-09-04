import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5500/api/v1',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // LOGIN MUTATION
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    // REGISER CUSTOMER
    registerCustomer: builder.mutation({
      query: (credentials) => ({
        url: '/auth/customer/register',
        method: 'POST',
        body: credentials,
      }),
    }),

    // REGISER SELLER
    registerSeller: builder.mutation({
      query: (credentials) => ({
        url: '/auth/seller/register',
        method: 'POST',
        body: credentials,
      }),
    }),

    // REGISER ADMIN
    registerAdmin: builder.mutation({
      query: (credentials) => ({
        url: '/auth/admin/register',
        method: 'POST',
        body: credentials,
      }),
    }),

    // LOGOUT MUTATION
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),

    // CURRENT USER QUERY
    getCurrentUser: builder.query({
      query: () => '/auth/me',
    }),
  }),
});

export const {
  useRegisterCustomerMutation,
  useRegisterSellerMutation,
  useRegisterAdminMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
} = authApi;