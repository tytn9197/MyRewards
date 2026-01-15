import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '@/constants/COLORS';
import { Image } from 'react-native';
import HomeScreen from '@/screens/HomeScreen';
import CollectedRewards from '@/screens/CollectedRewards';
import { ICONS } from '@/assets/icons/ICONS';

export type BottomTabParamList = {
  HomeScreen: undefined;
  CollectedRewards: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const HomeScreenTabIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => (
  <Image
    style={{
      tintColor: color,
      width: size,
      height: size,
    }}
    source={ICONS.home}
  />
);

const CollectedRewardsTabIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => (
  <Image
    style={{
      tintColor: color,
      width: size,
      height: size,
    }}
    source={ICONS.gift}
  />
);

const RootNavigator = (): React.JSX.Element => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.DARK_BLUE },
        tabBarActiveTintColor: COLORS.RED,
        tabBarInactiveTintColor: COLORS.WHITE,
        animation: 'fade',
      }}
    >
      <BottomTab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          tabBarIcon: HomeScreenTabIcon,
          tabBarButtonTestID: "HomeBottomTab",
          title: 'Home',
        }}
      />
      <BottomTab.Screen
        name={'CollectedRewards'}
        component={CollectedRewards}
        options={{
          tabBarIcon: CollectedRewardsTabIcon,
          tabBarButtonTestID: "CollectedBottomTab",
          title: 'Collected',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default RootNavigator;
