import { Meal } from '@types';

import Divider from '@assets/divider.svg';

import * as S from './styles';

type Props = {
  meal: Meal;
};

export function MealItem({ meal }: Props) {
  const { hour, name, isDiet } = meal;

  return (
    <S.Container>
      <S.Content>
        <S.Hour>{hour}</S.Hour>
        <Divider />
        <S.Name numberOfLines={1}>{name}</S.Name>
      </S.Content>
      <S.Status isDiet={isDiet} />
    </S.Container>
  );
}
