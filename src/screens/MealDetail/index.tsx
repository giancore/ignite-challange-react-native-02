import { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { format } from 'date-fns';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';
import { AppRoutesType } from '@routes/app.routes';
import { mealRemoveById } from '@storage/meal';

import { Modal } from './components/Modal';
import * as S from './styles';

type Props = NativeStackScreenProps<AppRoutesType, 'mealDetail'>;

export function MealDetail({ navigation, route }: Props) {
  const { name, description, date, isDiet, id } = route.params.meal;
  const { COLORS } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(true);

  const formattedDate = () => format(new Date(date), "dd/MM/yyyy 'às' HH:mm");

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  async function handleRemoveMeal() {
    await mealRemoveById(id);

    setIsModalOpen(false);

    navigation.navigate('home');
  }

  return (
    <S.Container isDiet={isDiet}>
      <S.Content>
        <S.Title>{name}</S.Title>
        <S.Text>{description ?? 'Sem descrição'}</S.Text>

        <S.DateTimeContainer>
          <S.SmallTitle>Data e hora</S.SmallTitle>
          <S.Text>{formattedDate()} </S.Text>
        </S.DateTimeContainer>

        {isDiet ? (
          <S.Tag>
            <S.GreenCircle />
            <S.Text>dentro da dieta</S.Text>
          </S.Tag>
        ) : (
          <S.Tag>
            <S.RedCircle />
            <S.Text>fora da dieta</S.Text>
          </S.Tag>
        )}
      </S.Content>

      <S.ButtonContainer>
        <Button
          title="Editar refeição"
          onPress={() => navigation.navigate('newMeal', { meal: route.params.meal })}
          icon={<PencilSimpleLine size={18} color={COLORS.WHITE} />}
        />
        <S.Separator />
        <Button
          title="Excluir refeição"
          onPress={handleToggleModal}
          icon={<Trash size={18} color={COLORS.GRAY_1} />}
          type="SECONDARY"
        />
      </S.ButtonContainer>

      <Modal onCancel={handleToggleModal} onConfirm={handleRemoveMeal} visible={isModalOpen} />
    </S.Container>
  );
}
