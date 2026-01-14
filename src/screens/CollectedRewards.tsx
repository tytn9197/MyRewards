import { deleteReward, selectListCollectedRewards } from '@/store/rewardsSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { FlashList } from '@shopify/flash-list';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CollectedRewards = () => {
  const collectedList = useAppSelector(selectListCollectedRewards);

  const dispatch = useAppDispatch();

  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Text>CollectedRewards</Text>
      <FlashList
        data={collectedList ?? []}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(deleteReward(item));
            }}
          >
            <Text style={{ backgroundColor: 'red' }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        keyExtractor={item => {
          return item.id.toString();
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
  },
});

export default CollectedRewards;
