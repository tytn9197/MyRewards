import RewardItem from '@/components/RewardItem/RewardItem';
import { COLORS } from '@/constants/COLORS';
import { selectListCollectedRewards } from '@/store/rewardsSlice';
import { useAppSelector } from '@/store/store';
import { FlashList } from '@shopify/flash-list';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CollectedRewards = () => {
  const collectedList = useAppSelector(selectListCollectedRewards);

  const { top } = useSafeAreaInsets();

  const renderItemSeparator = () => <View style={styles.h20} />;

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Text style={styles.title}>CollectedRewards</Text>
      <FlashList
        testID='CollectedList'
        data={collectedList ?? []}
        renderItem={({ item }) => (
          <RewardItem item={item} isCollected={undefined} />
        )}
        ItemSeparatorComponent={renderItemSeparator}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    color: COLORS.BLACK,
    marginVertical: 20,
  },
  list: {
    flex: 1,
  },
  h20: {
    height: 20,
  },
});

export default CollectedRewards;
