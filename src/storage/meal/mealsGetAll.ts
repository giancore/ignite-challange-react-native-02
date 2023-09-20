import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from '@storage/storageConfig';
import { Meal } from '@types';

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: Meal[] = storage ? (JSON.parse(storage) as Meal[]) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
