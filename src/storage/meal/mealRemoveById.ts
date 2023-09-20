import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from '@storage/storageConfig';

import { mealsGetAll } from './mealsGetAll';

export async function mealRemoveById(mealId: string) {
  try {
    const storedMeals = await mealsGetAll();

    const meals = storedMeals.filter((meal) => meal.id !== mealId);

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}
