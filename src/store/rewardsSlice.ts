import rewardsExtended from '@/services/rtk-query/rewards/rewards';
import {
  Reward,
  RewardsResponse,
} from '@/services/rtk-query/rewards/rewards.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RewardsState {
  collectedRewards: Record<string, boolean | null | undefined>;
  rewards: RewardsResponse['results'];
}

const initialState: RewardsState = {
  collectedRewards: {},
  rewards: [],
};

export const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    collectReward: (state, action: PayloadAction<Reward>) => {
      state.collectedRewards[action.payload.id] = true;
    },
    deleteReward: (state, action: PayloadAction<Reward>) => {
      state.collectedRewards[action.payload.id] = null;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      rewardsExtended.endpoints.getListRewards.matchFulfilled,
      (state, { payload, meta }) => {
        const requestedPage = meta.arg.originalArgs;
        if (requestedPage.page === 1) {
          state.rewards = payload.results;
        } else {
          state.rewards = state.rewards.concat(payload.results)
        }
      },
    );
  },
});

export const { collectReward, deleteReward } = rewardsSlice.actions;
export default rewardsSlice.reducer;
