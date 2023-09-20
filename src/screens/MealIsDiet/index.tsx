import { useNavigation } from '@react-navigation/native';

import feedbackPositiveImg from '@assets/feedback-positive.png';
import { Button } from '@components/Button';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import * as S from './styles';

export function MealIsDiet() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

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
        <Button title="Ir para a página inicial" onPress={() => navigate('home')} />
      </S.ButtonContainer>
    </S.Container>
  );
}
