import { formatAsPercentage } from '@utils';

import * as S from './styles';

export function Statistics() {
  const isDiet = true;

  return (
    <S.Container isDiet={isDiet}>
      <S.PercentBox isDiet={isDiet} sharedTransitionTag="percent-box-tag">
        <S.Percent sharedTransitionTag="percent-tag">{formatAsPercentage(90.86)}</S.Percent>
        <S.Label sharedTransitionTag="percent-label-tag">das refeições dentro da dieta</S.Label>
      </S.PercentBox>

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
