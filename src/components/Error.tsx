import { ICONS } from '@/assets/icons/ICONS';
import { COLORS } from '@/constants/COLORS';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface ErrorProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * handle onPress reset button
   */
  onPressReset: (event: GestureResponderEvent) => void;
}

const Error = (props: ErrorProps) => {
  return (
    <View style={styles.container}>
      <Image source={ICONS.bug} style={styles.icBug} />
      <Text style={styles.errorText}>Something went wrong!</Text>
      <Text style={styles.errorText}>Please try again</Text>
      <TouchableOpacity style={styles.button} onPress={props.onPressReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
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
  icBug: {
    width: 50,
    height: 50,
  },
  errorText: {
    fontSize: 20,
    color: COLORS.GRAY,
  },
  resetText: {
    fontSize: 20,
    color: COLORS.WHITE,
  },
  button: {
    borderRadius: 10,
    height: 60,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: COLORS.RED,
  },
});

export default Error;
