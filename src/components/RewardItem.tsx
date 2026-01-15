import { Reward } from '@/services/rtk-query/rewards/rewards.types';
import { collectReward } from '@/store/rewardsSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface RewardItemProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * Reward item data
   */
  item: Reward;
}

const RewardItem = ({ item }: RewardItemProps) => {
  const { collectedRewards } = useAppSelector(state => state.rewards);

  const dispatch = useAppDispatch();

  const handleItemPress = () => {
    dispatch(collectReward(item));
  };

  return (
    <TouchableOpacity
      onPress={handleItemPress}
      disabled={!!collectedRewards[item.id]}
    >
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    backgroundColor: 'red',
  },
});

const arePropsEqual = (
  prevProps: Readonly<RewardItemProps>,
  nextProps: Readonly<RewardItemProps>,
): boolean => {
  return prevProps.item.id === nextProps.item.id;
};

export default memo(RewardItem, arePropsEqual);
