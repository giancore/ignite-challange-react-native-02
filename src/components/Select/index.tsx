import { useEffect, useState } from 'react';
import { ViewProps } from 'react-native';

import * as S from './styles';

type Props = ViewProps & {
  onSelectIfIsDiet: (isDiet: boolean | undefined) => void;
  errorMessage?: string | null;
  value: boolean | undefined;
};

export function Select({ onSelectIfIsDiet, errorMessage, value, ...rest }: Props) {
  const invalid = !!errorMessage;

  const [greenState, setGreenState] = useState<boolean>();
  const [redState, setRedState] = useState<boolean>();

  useEffect(() => {
    const isDiet = greenState && !redState;
    const isNotDiet = redState && !greenState;
    const dietState = isDiet ? true : isNotDiet ? false : undefined;

    onSelectIfIsDiet(dietState);
  }, [greenState, redState]);

  useEffect(() => {
    if (value !== undefined) {
      setGreenState(value);
      setRedState(!value);
    }
  }, []);

  return (
    <S.Container {...rest}>
      <S.Content>
        <S.GreenSelect
          isSelected={greenState}
          onPress={() => {
            setGreenState(!greenState);
            setRedState(false);
          }}>
          <S.GreenDot />
          <S.Label>Sim</S.Label>
        </S.GreenSelect>

        <S.RedSelect
          isSelected={redState}
          onPress={() => {
            setRedState(!redState);
            setGreenState(false);
          }}>
          <S.RedDot />
          <S.Label>Não</S.Label>
        </S.RedSelect>
      </S.Content>

      {invalid && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}
