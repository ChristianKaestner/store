'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '@/app/lib/constants';

export const productsApi = createApi({
  reducerPath: 'productsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),
  endpoints: builder => ({
    getPromoted: builder.query({
      query: () => 'products/promotion',
    }),
    getHookahs: builder.query({
      query: params => ({
        url: 'products/hookahs',
        params,
      }),
    }),
    getTobacco: builder.query({
      query: params => ({
        url: 'products/tobacco',
        params,
      }),
    }),
    getCoals: builder.query({
      query: params => ({
        url: 'products/coals',
        params,
      }),
    }),
    getAccessories: builder.query({
      query: params => ({
        url: 'products/accessories',
        params,
      }),
    }),
    getProductById: builder.query({
      query: id => `products/id/${id}`,
    }),
    getRelatedProducts: builder.query({
      query: id => `products/related/${id}`,
    }),
    getFavoriteProducts: builder.query({
      query: token => ({
        url: 'products/favorites',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getProductTabs: builder.query({
      query: () => 'products/tabs',
    }),
    getSuggestion: builder.query({
      query: params => ({
        url: 'products/suggestion',
        params,
      }),
    }),
    getProductReviews: builder.query({
      query: id => `products/reviews/${id}`,
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
