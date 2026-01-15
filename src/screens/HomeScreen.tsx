import Error from '@/components/Error';
import ListRewards from '@/components/ListRewards';
import Loading from '@/components/Loading';
import { APP_CONST } from '@/constants/APP_CONST';
import { useGetListRewardsQuery } from '@/services/rtk-query/rewards/rewards';
import { RewardsRequest } from '@/services/rtk-query/rewards/rewards.types';
import { Activity, useState } from 'react';

const HomeScreen = () => {
  const [request, setRequest] = useState<RewardsRequest>({ page: 1 });
  const { data, isLoading, isError, isFetching } =
    useGetListRewardsQuery(request);

  const handleEndReached = () => {
    if (
      !!data &&
      !!data?.next &&
      data?.count > request.page * APP_CONST.list_limit
    ) {
      setRequest(prev => {
        return { page: prev.page + 1 };
      });
    }
  };

  const handleRefresh = () => {
    setRequest({ page: 1 });
  };

  return (
    <>
      <Activity mode={isLoading ? 'visible' : 'hidden'}>
        <Loading />
      </Activity>
      <Activity mode={isError ? 'visible' : 'hidden'}>
        <Error onPressReset={handleRefresh} />
      </Activity>
      <Activity mode={!!data && !isLoading ? 'visible' : 'hidden'}>
        <ListRewards
          request={request}
          isFetching={isFetching}
          onRefresh={handleRefresh}
          onEndReached={handleEndReached}
        />
      </Activity>
    </>
  );
};

export default HomeScreen;
