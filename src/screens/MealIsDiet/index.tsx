import { NativeStackScreenProps } from '@react-navigation/native-stack';

import feedbackPositiveImg from '@assets/feedback-positive.png';
import { Button } from '@components/Button';
import { AppRoutesType } from '@routes/app.routes';

import * as S from './styles';

type Props = NativeStackScreenProps<AppRoutesType, 'mealIsDiet'>;

export function MealIsDiet({ navigation }: Props) {
  return (
    <S.Container>
      <S.Feedback>
        <S.Title>Continue assim!</S.Title>
        <S.Text>
          Você continua <S.Strong>dentro da dieta</S.Strong>. Muito bem!
        </S.Text>
      </S.Feedback>

      <S.ImageContainer>
        <S.Image source={feedbackPositiveImg} />
      </S.ImageContainer>

      <S.ButtonContainer>
        <Button title="Ir para a página inicial" onPress={() => navigation.navigate('home')} />
      </S.ButtonContainer>
    </S.Container>
  );
}
