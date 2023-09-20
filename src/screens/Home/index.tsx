import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import { mealsGetAll } from '@storage/meal';
import { MealSectionList } from '@types';
import { convertMealsToGroupList } from '@utils';

import { Header } from './components/Header';
import { Meals } from './components/Meals';
import { Percent } from './components/Percent';
import * as S from './styles';

export function Home() {
  const [mealPercents, setMealPercents] = useState<number>(0);
  const [sections, setSections] = useState<MealSectionList[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await mealsGetAll();

      const mealsInDiet = data.reduce(
        (counter, { isDiet }) => (isDiet ? (counter += 1) : counter),
        0
      );

      const percent = (100 * mealsInDiet) / data.length;

      setMealPercents(percent);

      const newList = convertMealsToGroupList(data);

      setSections(newList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <S.Container>
      <Header />

      <Percent mealPercents={mealPercents} />

      <Meals isLoading={isLoading} sections={sections} />
    </S.Container>
  );
}
