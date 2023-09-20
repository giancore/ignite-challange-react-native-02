import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from '@storage/storageConfig';
import { Meal } from '@types';

import { mealsGetAll } from './mealsGetAll';

export async function mealCreate(meal: Meal) {
  try {
    const meals = await mealsGetAll();

    const storage = JSON.stringify([...meals, meal]);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
