import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { formatAsPercentage } from '@utils';
import {
  Easing,
  FadeInDown,
  FadeInUp,
  FadeOut,
  SharedTransition,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import * as S from './styles';

type Props = {
  mealPercents: number;
};

const SPRING_CONFIG = {
  mass: 0.5,
  stiffness: 100,
  damping: 200,
};

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

export function Percent({ mealPercents }: Props) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  const handleGoToStatistics = () => navigate('statistics');

  return (
    <S.Pressable onPress={handleGoToStatistics}>
      <S.PercentBox
        isDiet={true}
        // entering={FadeInDown}
        // exiting={FadeOut}
        sharedTransitionTag="percent-tag"
        sharedTransitionStyle={customTransition}>
        {/* <S.Open /> */}
        <S.Percent>{formatAsPercentage(mealPercents)}</S.Percent>
        <S.Label>das refeições dentro da dieta</S.Label>
      </S.PercentBox>
    </S.Pressable>
  );
}
