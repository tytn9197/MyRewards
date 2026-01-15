import {
  Reward,
  RewardsRequest,
} from '@/services/rtk-query/rewards/rewards.types';
import { collectReward } from '@/store/rewardsSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
  const { rewards, collectedRewards } = useAppSelector(state => state.rewards);
  const { top } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <FlashList<Reward>
        data={rewards ?? []}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(collectReward(item));
            }}
            disabled={!!collectedRewards[item.id]}
          >
            <Text style={{ backgroundColor: 'red' }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        keyExtractor={item => {
          return item.id.toString();
        }}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        onRefresh={onRefresh}
        refreshing={isFetching && request.page === 1}
        style={{ flex: 1 }}
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
});

export default ListRewards;
