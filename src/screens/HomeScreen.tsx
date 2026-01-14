import { APP_CONST } from '@/constants/APP_CONST';
import { useGetListRewardsQuery } from '@/services/rtk-query/rewards/rewards';
import {
  Reward,
  RewardsRequest,
} from '@/services/rtk-query/rewards/rewards.types';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { rewards } = useAppSelector(state => state.rewards);
  const [request, setRequest] = useState<RewardsRequest>({ page: 1 });
  const { data, isLoading, isError, isFetching } =
    useGetListRewardsQuery(request);

  const { top } = useSafeAreaInsets();

  const dispatch = useAppDispatch();

  const { container } = styles;

  const handleEndReached = () => {
    if (!!data && !!data?.next && data?.count > request.page * APP_CONST.list_limit) {
      setRequest(prev => {
        return { page: prev.page + 1 };
      });
    }
  };

  const handleRefresh = () => {
    setRequest({ page: 1 });
  };

  if (isLoading) {
    return (
      <View style={[container, { paddingTop: top }]}>
        <ActivityIndicator animating color={'red'} />
      </View>
    );
  }

  if (isError || !data) {
    return (
      <View style={[container, { paddingTop: top }]}>
        <Text>ERROR</Text>;
      </View>
    );
  }

  return (
    <View style={[container, { paddingTop: top }]}>
      <FlashList<Reward>
        data={rewards ?? []}
        renderItem={({ item }) => (
          <Text style={{ backgroundColor: 'red' }}>{item.name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        keyExtractor={item => {
          return item.id.toString();
        }}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        onRefresh={handleRefresh}
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

export default HomeScreen;
