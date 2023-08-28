import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  /* width: 100%; */
  flex: 1;
  padding: 20px 0px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  margin-top: 32px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Label = styled.Text`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export const MealsLabel = styled.Text`
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_2};
  `};
`;
