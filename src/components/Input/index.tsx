import { useState } from 'react';
import { TextInputProps } from 'react-native';

import { MaskedTextInputProps } from 'react-native-mask-text';

import * as S from './styles';

type InputProps = TextInputProps & {
  label: string;
  errorMessage?: string | null;
};

type MaskInputProps = MaskedTextInputProps & {
  label: string;
  errorMessage?: string | null;
};

export function Input({ label, errorMessage = null, ...rest }: InputProps) {
  const invalid = !!errorMessage;

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

      {invalid && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}

export function MaskInput({ label, errorMessage = null, ...rest }: MaskInputProps) {
  const invalid = !!errorMessage;

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

      <S.MaskedInput {...rest} onFocus={handleFocus} onBlur={handleBlur} isFocused={isFocused} />

      {invalid && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}
