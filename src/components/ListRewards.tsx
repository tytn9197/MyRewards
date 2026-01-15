import {
  Reward,
  RewardsRequest,
} from '@/services/rtk-query/rewards/rewards.types';
import { useAppSelector } from '@/store/store';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RewardItem from './RewardItem';

export interface ListRewardsProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * RewardsRequest to call GET rewards api
   */
  request: RewardsRequest;
  /**
   * To check if API is loading more
   */
  isFetching: boolean;
  /**
   * Children components.
   */
  onRefresh: FlashListProps<Reward>['onRefresh'];
  /**
   * onEndReached of Flash list
   */
  onEndReached: FlashListProps<Reward>['onEndReached'];
}

const ListRewards = (props: ListRewardsProps) => {
  const { request, isFetching, onRefresh, onEndReached } = props;

  const { rewards } = useAppSelector(state => state.rewards);

  const { top } = useSafeAreaInsets();

  const renderItemSeparator = () => <View style={styles.h20} />;

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <FlashList<Reward>
        data={rewards ?? []}
        renderItem={({ item }) => <RewardItem item={item} />}
        ItemSeparatorComponent={renderItemSeparator}
        keyExtractor={item => item.id.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        onRefresh={onRefresh}
        refreshing={isFetching && request.page === 1}
        style={styles.listStyle}
      />
      {isFetching && request.page !== 1 && (
        <ActivityIndicator animating color={'red'} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 1,
  },
  listStyle: {
    flex: 1,
  },
  h20: {
    height: 20,
  },
});

export default ListRewards;
