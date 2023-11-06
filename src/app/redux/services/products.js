import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: builder => ({
    getPromoted: builder.query({
      query: () => '/api/products/promotion',
    }),
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
  useGetPromotedQuery,
  useGetGoodsQuery,
  useGetAllGoodsQuery,
  useGetProductByIdQuery,
  useGetProductsByIdsQuery,
} = productsApi;
