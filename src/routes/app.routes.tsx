import { Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';

type AppRoutesType = {
  home: undefined;
  statistics: undefined;
  newMeal: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesType>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesType>();

export function AppRoutes() {
  const { FONT_FAMILY, FONT_SIZE, COLORS } = useTheme();

  const { goBack } = useNavigation<AppNavigatorRoutesProps>();

  const isDiet = true;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarStyle: 'dark',
        statusBarColor: COLORS.WHITE,
      }}>
      <Screen name="home" component={Home} />
      <Screen
        name="statistics"
        component={Statistics}
        options={{
          statusBarColor: isDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT,
          headerShown: true,
          headerTitle: '',
          headerLeft: (props) => (
            <Pressable onPress={goBack} {...props}>
              <ArrowLeft size={24} color={isDiet ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: isDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT,
          },
          headerShadowVisible: false,
        }}
      />
      <Screen
        name="newMeal"
        component={NewMeal}
        options={{
          statusBarColor: COLORS.GRAY_5,
          headerShown: true,
          headerTitle: 'Nova refeição',
          headerTitleAlign: 'center',
          headerLeft: (props) => (
            <Pressable onPress={goBack} {...props}>
              <ArrowLeft size={24} />
            </Pressable>
          ),
          headerTitleStyle: {
            fontFamily: FONT_FAMILY.BOLD,
            fontSize: FONT_SIZE.LG,
          },
          headerStyle: {
            backgroundColor: COLORS.GRAY_5,
          },
          headerShadowVisible: false,
        }}
      />
    </Navigator>
  );
}
