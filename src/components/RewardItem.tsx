import { Reward } from '@/services/rtk-query/rewards/rewards.types';
import { collectReward } from '@/store/rewardsSlice';
import { useAppDispatch } from '@/store/store';
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
  /**
   * check whether this item is collected or not, to disable Collect button
   */
  isCollected: boolean;
}

const RewardItem = ({ item, isCollected }: RewardItemProps) => {
  const dispatch = useAppDispatch();

  const handleItemPress = () => {
    dispatch(collectReward(item));
  };

  return (
    <TouchableOpacity onPress={handleItemPress} disabled={!!isCollected}>
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
