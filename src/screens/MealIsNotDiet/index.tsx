import { NativeStackScreenProps } from '@react-navigation/native-stack';

import feedbackNegativeImg from '@assets/feedback-negative.png';
import { Button } from '@components/Button';
import { AppRoutesType } from '@routes/app.routes';

import * as S from './styles';

type Props = NativeStackScreenProps<AppRoutesType, 'mealIsNotDiet'>;

export function MealIsNotDiet({ navigation }: Props) {
  return (
    <S.Container>
      <S.Feedback>
        <S.Title>Que pena!</S.Title>
        <S.Text>
          Você <S.Strong>saiu da dieta</S.Strong> dessa vez, mas continue se esforçando e não
          desista!
        </S.Text>
      </S.Feedback>

      <S.ImageContainer>
        <S.Image source={feedbackNegativeImg} />
      </S.ImageContainer>

      <S.ButtonContainer>
        <Button title="Ir para a página inicial" onPress={() => navigation.navigate('home')} />
      </S.ButtonContainer>
    </S.Container>
  );
}
