import styled, { css } from 'styled-components/native';

type Props = {
  isFocused: boolean;
};

export const Container = styled.View`
  width: 100%;
`;

export const Input = styled.TextInput<Props>`
  padding: 14px;
  align-items: center;
  border-radius: 6px;

  ${({ theme, isFocused }) => css`
    border: 1px solid ${isFocused ? theme.COLORS.GRAY_3 : theme.COLORS.GRAY_5};
  `};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-style: normal;
    font-weight: 700;
    color: ${theme.COLORS.GRAY_2};
  `};
`;
