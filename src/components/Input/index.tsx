import { useState } from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

type Props = TextInputProps & {
  label: string;
};

export function Input({ label, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <S.Container>
      <S.Label>{label}</S.Label>

      <S.Input {...rest} onFocus={handleFocus} onBlur={handleBlur} isFocused={isFocused} />
    </S.Container>
  );
}
