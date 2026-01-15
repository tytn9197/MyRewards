import { Reward } from '@/services/rtk-query/rewards/rewards.types';
import { collectReward } from '@/store/rewardsSlice';
import { useAppDispatch } from '@/store/store';
import { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './RewardItem.style';

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
  isCollected: boolean | undefined;
}

const RewardItem = ({ item, isCollected }: RewardItemProps) => {
  const dispatch = useAppDispatch();

  const handleItemPress = () => {
    dispatch(collectReward(item));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      {!!item.description && (
        <Text style={styles.description}>{item.description}</Text>
      )}
      {isCollected !== undefined && (
        <TouchableOpacity
          style={[styles.button, isCollected && styles.disableButton]}
          onPress={handleItemPress}
          disabled={!!isCollected}
        >
          <Text style={styles.collect}>COLLECT</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const arePropsEqual = (
  prevProps: Readonly<RewardItemProps>,
  nextProps: Readonly<RewardItemProps>,
): boolean => {
  return (
    prevProps.item.id === nextProps.item.id &&
    prevProps.isCollected === nextProps.isCollected
  );
};

export default memo(RewardItem, arePropsEqual);
