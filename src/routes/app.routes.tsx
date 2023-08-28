import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

// import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics';

type AppRoutesType = {
  home: undefined;
  statistics: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesType>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesType>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
}
