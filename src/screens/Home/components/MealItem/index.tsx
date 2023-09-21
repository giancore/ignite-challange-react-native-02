import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import Divider from '@assets/divider.svg';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Meal } from '@types';

import * as S from './styles';

type Props = {
  meal: Meal;
};

export function MealItem({ meal }: Props) {
  const { date, name, isDiet } = meal;

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  function formatHour(date: Date) {
    return format(date, 'HH:mm');
  }

  return (
    <S.Container onPress={() => navigate('mealDetail', { meal })}>
      <S.Content>
        <S.Hour>{formatHour(new Date(date))}</S.Hour>
        <Divider />
        <S.Name numberOfLines={1}>{name}</S.Name>
      </S.Content>
      <S.Status isDiet={isDiet} />
    </S.Container>
  );
}
