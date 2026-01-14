import rewardsExtended from '@/services/rtk-query/rewards/rewards';
import {
  Reward,
  RewardsResponse,
} from '@/services/rtk-query/rewards/rewards.types';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface RewardsState {
  collectedRewards: Record<string, Reward>;
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
      state.collectedRewards[action.payload.id] = action.payload;
    },
    deleteReward: (state, action: PayloadAction<Reward>) => {
      delete state.collectedRewards[action.payload.id];
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

const selectCollectedRewards = (state: RootState) =>
  state.rewards.collectedRewards;

export const selectListCollectedRewards = createSelector(
  [selectCollectedRewards],
  collectedRewards => Object.values(collectedRewards),
);
