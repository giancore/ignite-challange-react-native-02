import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_5};
  `};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 40px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const InputContainer = styled.View`
  flex: 1;
`;

export const InputContainerRow = styled.View`
  flex-direction: row;
`;

export const Separator = styled.View`
  width: 20px;
`;

export const ButtonContainer = styled.View`
  padding: 24px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const Label = styled.Text`
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `};
`;
