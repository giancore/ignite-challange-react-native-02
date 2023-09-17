import styled, { css } from 'styled-components/native';

type Props = {
  isSelected: boolean | undefined;
};

export const Container = styled.View``;

export const Content = styled.View`
  flex-direction: row;
`;

const SelectContainer = styled.TouchableOpacity<Props>`
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 16px;

  ${({ theme }) => css`
    border: ${theme.COLORS.GRAY_6};
    background-color: ${theme.COLORS.GRAY_6};
  `};
`;

export const RedSelect = styled(SelectContainer)`
  margin-left: 4px;

  ${({ theme, isSelected }) => css`
    ${isSelected &&
    `border: 1px solid ${theme.COLORS.RED_DARK};
    background-color: ${theme.COLORS.RED_LIGHT};`};

    ${isSelected === false &&
    `border: 1px solid ${theme.COLORS.GRAY_6};
    background-color: ${theme.COLORS.GRAY_6};`};
  `};
`;

export const GreenSelect = styled(SelectContainer)`
  margin-right: 4px;

  ${({ theme, isSelected }) => css`
    ${isSelected &&
    `border: 1px solid ${theme.COLORS.GREEN_DARK};
    background-color: ${theme.COLORS.GREEN_LIGHT};`};

    ${!isSelected &&
    `border: 1px solid ${theme.COLORS.GRAY_6};
    background-color: ${theme.COLORS.GRAY_6};`};
  `};
`;

const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-right: 8px;
`;

export const RedDot = styled(Dot)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.RED_DARK};
  `};
`;

export const GreenDot = styled(Dot)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GREEN_DARK};
  `};
`;

export const Label = styled.Text`
  line-height: 18px;
  font-style: normal;
  font-weight: 700;

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
