import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { formatAsPercentage } from '@utils';
import {
  Easing,
  FadeInDown,
  FadeOut,
  SharedTransition,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import * as S from './styles';

const customTransition = SharedTransition.custom((values) => {
  'worklet';
  return {
    width: withTiming(values.targetWidth, {
      duration: 300,
      easing: Easing.inOut(Easing.quad),
    }),
    height: withTiming(values.targetHeight, {
      duration: 300,
      easing: Easing.inOut(Easing.quad),
    }),
    originX: withTiming(values.targetOriginX, {
      duration: 300,
      easing: Easing.inOut(Easing.quad),
    }),
    originY: withTiming(values.targetOriginY, {
      duration: 300,
      easing: Easing.inOut(Easing.quad),
    }),
  };
});

export function Statistics() {
  const { goBack } = useNavigation<AppNavigatorRoutesProps>();

  return (
    <S.Container>
      {/* <S.GoBackContainer onPress={goBack}>
        <S.GoBack />
      </S.GoBackContainer> */}

      <S.Pressable onPress={goBack}>
        <S.PercentBox
          isDiet={true}
          // entering={FadeInDown}
          // exiting={FadeOut}
          sharedTransitionTag="percent-tag"
          sharedTransitionStyle={customTransition}>
          {/* <S.Open /> */}
          <S.Percent>{formatAsPercentage(90.86)}</S.Percent>
          <S.Label>das refeições dentro da dieta</S.Label>
        </S.PercentBox>
      </S.Pressable>

      <S.Content>
        <S.Title>Estatísticas gerais</S.Title>

        <S.BigBox>
          <S.Number>22</S.Number>
          <S.Label>melhor sequência de pratos dentro da dieta</S.Label>
        </S.BigBox>

        <S.BigBox>
          <S.Number>109</S.Number>
          <S.Label>refeições registradas</S.Label>
        </S.BigBox>

        <S.SmallBoxContent>
          <S.SmallBox isDiet={true}>
            <S.Number>99</S.Number>
            <S.Label>refeições dentro da dieta</S.Label>
          </S.SmallBox>

          <S.SmallBox isDiet={false}>
            <S.Number>10</S.Number>
            <S.Label>refeições fora da dieta</S.Label>
          </S.SmallBox>
        </S.SmallBoxContent>
      </S.Content>
    </S.Container>
  );
}
