import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: builder => ({
    getGoods: builder.query({
      query: limit => `/goods?${limit && `_limit=${limit}`}`,
    }),
    getAllGoods: builder.query({
      query: () => '/goods',
    }),
    getProductById: builder.query({
      query: id => `/goods/${id}`,
    }),
    getProductsByIds: builder.query({
      query: params => `/goods?${params}`,
    }),
  }),
});

export const {
  useGetGoodsQuery,
  useGetAllGoodsQuery,
  useGetProductByIdQuery,
  useGetProductsByIdsQuery,
} = goodsApi;
