// Need to use the React-specific entry point to import createApi
import { APP_CONST } from "@/constants/APP_CONST"
import { RTKQuery } from "../rtk-query"
import { RewardsRequest, RewardsResponse } from "./rewards.types"

// Define a service using a base URL and expected endpoints
const rewardsExtended = RTKQuery.injectEndpoints({
  endpoints: (builder) => ({
    getListRewards: builder.query<RewardsResponse, RewardsRequest>({
      query: ({page}) => ({
        url: `bounties/?limit=${APP_CONST.list_limit}&page=${page}`,
        method: "GET",
      }),
      // Refetch when the page arg changes
      forceRefetch({ currentArg }) {
        return currentArg?.page === 1
      },
    }),
  }),
  overrideExisting: true,
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListRewardsQuery } = rewardsExtended

export default rewardsExtended