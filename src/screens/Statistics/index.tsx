import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import { mealsGetAll } from '@storage/meal';
import { formatAsPercentage } from '@utils';

import * as S from './styles';

export function Statistics() {
  const [mealPercents, setMealPercents] = useState<number>(0);
  const [mealsCount, setMealsCount] = useState<number>(0);
  const [mealsInDiet, setMealsInDiet] = useState<number>(0);
  const [mealsInNotDiet, setMealsInNotDiet] = useState<number>(0);
  const [isDiet, setIsDiet] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMeals() {
    try {
      setIsLoading(true);

      const data = await mealsGetAll();
      setMealsCount(data.length);

      const mealsInDietList = data.reduce(
        (counter, { isDiet }) => (isDiet ? (counter += 1) : counter),
        0
      );
      setMealsInDiet(mealsInDietList);
      setMealsInNotDiet(data.length - mealsInDietList);

      const percent = (100 * mealsInDietList) / data.length;
      setMealPercents(percent);

      setIsDiet(percent > 50);
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
    <S.Container isDiet={isDiet}>
      <S.PercentBox isDiet={isDiet} sharedTransitionTag="percent-box-tag">
        <S.Percent sharedTransitionTag="percent-tag">{formatAsPercentage(mealPercents)}</S.Percent>
        <S.Label sharedTransitionTag="percent-label-tag">das refeições dentro da dieta</S.Label>
      </S.PercentBox>

      <S.Content>
        <S.Title>Estatísticas gerais</S.Title>

        <S.BigBox>
          <S.Number>22</S.Number>
          <S.Label>melhor sequência de pratos dentro da dieta</S.Label>
        </S.BigBox>

        <S.BigBox>
          <S.Number>{mealsCount}</S.Number>
          <S.Label>refeições registradas</S.Label>
        </S.BigBox>

        <S.SmallBoxContent>
          <S.SmallBox isDiet={true}>
            <S.Number>{mealsInDiet}</S.Number>
            <S.Label>refeições dentro da dieta</S.Label>
          </S.SmallBox>

          <S.SmallBox isDiet={false}>
            <S.Number>{mealsInNotDiet}</S.Number>
            <S.Label>refeições fora da dieta</S.Label>
          </S.SmallBox>
        </S.SmallBoxContent>
      </S.Content>
    </S.Container>
  );
}
