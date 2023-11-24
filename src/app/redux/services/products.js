'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
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
    getFavoriteProducts: builder.query({
      query: token => ({
        url: '/api/products/favorites',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getProductTabs: builder.query({
      query: () => '/api/products/tabs',
    }),
    getSuggestion: builder.query({
      query: params => ({
        url: '/api/products/suggestion',
        params,
      }),
    }),
    getProductReviews: builder.query({
      query: id => `/api/products/reviews/${id}`,
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
  useGetFavoriteProductsQuery,
  useGetProductTabsQuery,
  useGetSuggestionQuery,
  useGetProductReviewsQuery,
} = productsApi;
