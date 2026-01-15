import { COLORS } from '@/constants/COLORS';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.BLUE,
  },
  description: {
    fontSize: 14,
    color: COLORS.GRAY,
    marginVertical: 5,
  },
  button: {
    borderRadius: 10,
    height: 40,
    width: '50%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: COLORS.DARK_BLUE,
  },
  disableButton: {
    opacity: 0.3,
  },
  collect: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
});
