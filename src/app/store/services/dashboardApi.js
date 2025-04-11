import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const getBaseUrl = () => {

  if (typeof window !== 'undefined') {
    const useMock = localStorage?.getItem('useMockApi') !== 'false';
    return useMock 
      ? '/api/mock'
      : process.env.NEXT_PUBLIC_API_BASE_URL || '/api'; 
  }
 
  return process.env.NEXT_PUBLIC_API_BASE_URL || '/api';
};

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: getBaseUrl(),
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSalesData: builder.query({
      query: (params) => ({
        url: '/sales.json',
        params
      }),
      transformResponse: (response) => response.data
    }),
    getRevenueData: builder.query({
      query: (params) => ({
        url: '/revenue.json',
        params
      }),
      transformResponse: (response) => response.data
    }),
    getVisitorsData: builder.query({
      query: (params) => ({
        url: '/visitors.json',
        params
      }),
      transformResponse: (response) => response.data
    }),
    getDistributionData: builder.query({
      query: (params) => ({
        url: '/distribution.json',
        params
      }),
      transformResponse: (response) => response.data
    }),
    getTrafficData: builder.query({
      query: (params) => ({
        url: '/traffic.json',
        params
      }),
      transformResponse: (response) => response.data
    }),
    getProductData: builder.query({
      query: (params) => ({
        url: '/products.json',
        params
      }),
      transformResponse: (response) => response.data
    }),
    getPerformanceData: builder.query({
      query: (params) => ({
        url: '/performance.json',
        params
      }),
      transformResponse: (response) => response.data
    }),
    getUserStatsData: builder.query({
      query: (params) => ({
        url: '/user-stats.json',
        params
      }),
      transformResponse: (response) => response.data
    }),
    getConversionData: builder.query({
      query: (params) => ({
        url: '/conversion.json',
        params
      }),
      transformResponse: (response) => response.data
    }),
  }),
});

export const {
  useGetSalesDataQuery,
  useGetRevenueDataQuery,
  useGetVisitorsDataQuery,
  useGetDistributionDataQuery,
  useGetTrafficDataQuery,
  useGetProductDataQuery,
  useGetPerformanceDataQuery,
  useGetUserStatsDataQuery,
  useGetConversionDataQuery
} = dashboardApi;