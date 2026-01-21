// Need to use the React-specific entry point to import createApi
import { APP_CONST } from "@/constants/APP_CONST"
import { RTKQuery } from "../rtk-query"
import { RewardsRequest, RewardsResponse } from "./rewards.types"
import * as _ from "lodash"

// Define a service using a base URL and expected endpoints
const rewardsExtended = RTKQuery.injectEndpoints({
  endpoints: (builder) => ({
    getListRewards: builder.query<RewardsResponse, RewardsRequest>({
      keepUnusedDataFor: 3,
      query: ({ page }) => ({
        url: `bounties/?limit=${APP_CONST.list_limit}&page=${page}`,
        method: "GET",
      }),
      serializeQueryArgs: (args) => {
        return args.endpointName
      },
      merge: (currentCache, response, { arg }) => {
        const { page } = arg
        const { results, ...rest } = response

        if (page === 1) {
          return response
        }

        const updatedData: RewardsResponse = {
          ...rest,
          results: _.cloneDeep(currentCache.results).concat(results)
        }

        return updatedData
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.page !== previousArg?.page
      },
    }),
  }),
  overrideExisting: true,
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListRewardsQuery } = rewardsExtended

export default rewardsExtended