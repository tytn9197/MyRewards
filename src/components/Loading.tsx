import { COLORS } from '@/constants/COLORS';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export interface LoadingProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * Children components.
   */
  color?: string;
}

const Loading = (props: LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating color={props.color ?? COLORS.RED} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
