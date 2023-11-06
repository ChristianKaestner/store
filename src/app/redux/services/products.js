import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: builder => ({
    getPromoted: builder.query({
      query: () => '/api/products/promotion',
    }),
    getHookahs: builder.query({
      query: () => '/api/products/hookahs',
    }),
    getTobacco: builder.query({
      query: () => '/api/products/tobacco',
    }),
    getCoals: builder.query({
      query: () => '/api/products/coals',
    }),
    getAccessories: builder.query({
      query: () => '/api/products/accessories',
    }),
    getProductById: builder.query({
      query: id => `/api/products/id/${id}`,
    }),
    getGoods: builder.query({
      query: limit => `/goods?${limit && `_limit=${limit}`}`,
    }),
    getAllGoods: builder.query({
      query: () => '/goods',
    }),

    getProductsByIds: builder.query({
      query: params => `/goods?${params}`,
    }),
  }),
});

export const {
  useGetPromotedQuery,
  useGetHookahsQuery,
  useGetTobaccoQuery,
  useGetCoalsQuery,
  useGetAccessoriesQuery,
  useGetGoodsQuery,
  useGetAllGoodsQuery,
  useGetProductByIdQuery,
  useGetProductsByIdsQuery,
} = productsApi;
