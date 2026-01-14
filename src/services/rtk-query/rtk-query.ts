// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiConfig } from '../types';

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: "https://staging.helloagain.at/api/v1/clients/5189/",
  timeout: 10000,
}

// initialize an empty api service that we'll inject endpoints into later as needed
export const RTKQuery = createApi({
  reducerPath: 'root-rtk-query',
  baseQuery: fetchBaseQuery({
    baseUrl: DEFAULT_API_CONFIG.url, timeout: DEFAULT_API_CONFIG.timeout,
  }),
  endpoints: () => ({}),
})