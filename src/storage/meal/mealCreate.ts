import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from '@storage/storageConfig';
import { Meal } from '@types';

import { mealsGetAll } from './mealsGetAll';

export async function mealCreate(meal: Meal) {
  try {
    const meals = await mealsGetAll();

    const findIndex = meals.findIndex((mealInStorage) => mealInStorage.id === meal.id);

    if (findIndex) {
      meals[findIndex] = meal;
    }

    const storage = findIndex ? JSON.stringify([...meals]) : JSON.stringify([...meals, meal]);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
