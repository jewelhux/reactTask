import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from '../utils/interfaces';

const api = createApi({
  reducerPath: 'JikApi',
  tagTypes: ['Catalog'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mock-server-api-hcqxe00fv-jik789.vercel.app/' }),
  endpoints: (builder) => ({
    searchProduct: builder.query<ICard[], string>({
      query: (name: string) => `catalog?title_like=${name}`,
    }),
    productForId: builder.query<ICard, number>({
      query: (id: number) => `catalog/${id}`,
    }),
  }),
});

export const { useProductForIdQuery, useSearchProductQuery } = api;
export { api };
