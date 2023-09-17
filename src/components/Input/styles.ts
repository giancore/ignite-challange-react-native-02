import { MaskedTextInput } from 'react-native-mask-text';
import styled, { css } from 'styled-components/native';

type Props = {
  isFocused: boolean;
};

export const Container = styled.View`
  padding: 12px 0;
`;

export const Input = styled.TextInput<Props>`
  padding: 14px;
  border-radius: 6px;

  ${({ theme, isFocused }) => css`
    border: 1px solid ${isFocused ? theme.COLORS.GRAY_3 : theme.COLORS.GRAY_5};
  `};
`;

export const MaskedInput = styled(MaskedTextInput)<Props>`
  padding: 14px;
  border-radius: 6px;

  ${({ theme, isFocused }) => css`
    border: 1px solid ${isFocused ? theme.COLORS.GRAY_3 : theme.COLORS.GRAY_5};
  `};
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export const ErrorMessage = styled.Text`
  margin-top: 4px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.RED_DARK};
  `};
`;
