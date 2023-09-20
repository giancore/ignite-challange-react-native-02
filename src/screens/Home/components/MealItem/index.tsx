import { format } from 'date-fns';

import Divider from '@assets/divider.svg';
import { Meal } from '@types';

import * as S from './styles';

type Props = {
  meal: Meal;
};

export function MealItem({ meal }: Props) {
  const { date, name, isDiet } = meal;

  function formatHour(date: Date) {
    return format(date, 'HH:mm');
  }

  return (
    <S.Container>
      <S.Content>
        <S.Hour>{formatHour(new Date(date))}</S.Hour>
        <Divider />
        <S.Name numberOfLines={1}>{name}</S.Name>
      </S.Content>
      <S.Status isDiet={isDiet} />
    </S.Container>
  );
}
