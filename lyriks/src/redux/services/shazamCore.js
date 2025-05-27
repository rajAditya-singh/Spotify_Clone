import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f8a723122fmshdc5c3d67040495fp125fd1jsn1dc864ba80be',
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
  },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=DZ', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', 'f8a723122fmshdc5c3d67040495fp125fd1jsn1dc864ba80be');

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
