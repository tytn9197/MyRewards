import {
  Reward,
} from '@/services/rtk-query/rewards/rewards.types';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface RewardsState {
  collectedRewards: Record<string, Reward>;
}

const initialState: RewardsState = {
  collectedRewards: {},
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
});

export const { collectReward, deleteReward } = rewardsSlice.actions;
export default rewardsSlice.reducer;

const selectCollectedRewards = (state: RootState) =>
  state.rewards.collectedRewards;

export const selectListCollectedRewards = createSelector(
  [selectCollectedRewards],
  collectedRewards => Object.values(collectedRewards),
);
