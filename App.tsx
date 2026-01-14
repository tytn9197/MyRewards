/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { store } from '@/store/store';
import { Platform, StatusBar, StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const { top, bottom, left, right } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  const isPortrait = height >= width;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <View style={[styles.container, !isPortrait && Platform.OS === "ios"? { paddingLeft: left, paddingRight: right }: { paddingTop: top, paddingBottom: bottom }]}>
          <Text>Hello World</Text>
        </View>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default App;
