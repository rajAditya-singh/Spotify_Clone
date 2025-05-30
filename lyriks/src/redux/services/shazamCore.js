import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', 'b8975ca0e7msh1ded44c3a7a1627p1b77bdjsn583e5739d229');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopChart: builder.query({ query: () => '/charts/world?country_code=DZ' }),
  }),
});

export const {
  useGetTopChartQuery,
} = shazamCoreApi;
