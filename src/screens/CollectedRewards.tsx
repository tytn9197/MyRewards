import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CollectedRewards = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Text>CollectedRewards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CollectedRewards;
