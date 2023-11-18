import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: builder => ({
    getPromoted: builder.query({
      query: () => '/api/products/promotion',
    }),
    getHookahs: builder.query({
      query: params => ({
        url: '/api/products/hookahs',
        params,
      }),
    }),
    getTobacco: builder.query({
      query: params => ({
        url: '/api/products/tobacco',
        params,
      }),
    }),
    getCoals: builder.query({
      query: params => ({
        url: '/api/products/coals',
        params,
      }),
    }),
    getAccessories: builder.query({
      query: params => ({
        url: '/api/products/accessories',
        params,
      }),
    }),
    getProductById: builder.query({
      query: id => `/api/products/id/${id}`,
    }),
    getRelatedProducts: builder.query({
      query: id => `/api/products/related/${id}`,
    }),

    getGoods: builder.query({
      query: limit => `/goods?${limit && `_limit=${limit}`}`,
    }),
    getAllGoods: builder.query({
      query: () => '/goods',
    }),
  }),
});

export const {
  useGetPromotedQuery,
  useGetHookahsQuery,
  useGetTobaccoQuery,
  useGetCoalsQuery,
  useGetAccessoriesQuery,
  useGetRelatedProductsQuery,
  useGetProductByIdQuery,

  useGetAllGoodsQuery,
  useGetGoodsQuery,
} = productsApi;
