import rewardsExtended from '@/services/rtk-query/rewards/rewards';
import {
  Reward,
  RewardsResponse,
} from '@/services/rtk-query/rewards/rewards.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RewardsState {
  collectedRewards: Record<string, boolean | null | undefined>;
  page: number
  rewards: RewardsResponse['results'];
  next: RewardsResponse['next'];
  count: RewardsResponse['count'];
}

const initialState: RewardsState = {
  collectedRewards: {},
  page: 1,
  rewards: [],
  count: 0,
  next: null,
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
        state.count = payload.count;
        state.next = payload.next;
        if (requestedPage.page === 1) {
          state.rewards = payload.results;
        } else {
          state.rewards = [...state.rewards, ...payload.results];
        }
      },
    );
  },
});

export const { collectReward, deleteReward } = rewardsSlice.actions;
export default rewardsSlice.reducer;
