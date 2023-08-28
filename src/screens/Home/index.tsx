import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { Meals } from './components/Meals';
import { Percent } from './components/Percent';
import * as S from './styles';

export function Home() {
  const [mealPercents, setMealPercents] = useState<number>(0);

  useEffect(() => {
    setMealPercents(90.86);
  }, []);

  return (
    <S.Container>
      <Header />

      <Percent mealPercents={mealPercents} />

      <Meals />
    </S.Container>
  );
}
