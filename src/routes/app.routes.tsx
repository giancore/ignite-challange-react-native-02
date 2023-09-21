import { Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Home } from '@screens/Home';
import { MealDetail } from '@screens/MealDetail';
import { MealIsDiet } from '@screens/MealIsDiet';
import { MealIsNotDiet } from '@screens/MealIsNotDiet';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';
import { Meal } from '@types';

export type AppRoutesType = {
  home: undefined;
  statistics: undefined;
  newMeal: undefined | { meal: Meal };
  mealIsDiet: undefined;
  mealIsNotDiet: undefined;
  mealDetail: { meal: Meal };
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
        options={({ route }) => ({
          statusBarColor: COLORS.GRAY_5,
          headerShown: true,
          headerTitle: route.params?.meal.id ? 'Editar refeição' : 'Nova refeição',
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
        })}
      />
      <Screen name="mealIsDiet" component={MealIsDiet} />
      <Screen name="mealIsNotDiet" component={MealIsNotDiet} />
      <Screen
        name="mealDetail"
        component={MealDetail}
        options={({ route }) => ({
          statusBarColor: route.params.meal.isDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT,
          headerShown: true,
          headerTitle: 'Refeição',
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
            backgroundColor: route.params.meal.isDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT,
          },
          headerShadowVisible: false,
        })}
      />
    </Navigator>
  );
}
