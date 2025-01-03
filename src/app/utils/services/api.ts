// lib/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kora-service.onrender.com' }),
  endpoints: (builder) => ({
    // Define endpoints here
    getItems: builder.query<JSON[], void>({
      query: () => '/items', // Adjust the endpoint path as needed
    }),
  }),
});

export const { useGetItemsQuery } = api;
