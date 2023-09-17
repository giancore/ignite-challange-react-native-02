import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

type Props = {
  isDiet: boolean;
};

export const Container = styled.View<Props>`
  flex: 1;

  ${({ theme, isDiet }) => css`
    background-color: ${isDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `};
`;

export const PercentBox = styled(Animated.View)<Props>`
  align-items: center;
  height: 100px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `};
`;

export const Content = styled.View`
  flex: 1;
  padding: 32px 24px 0 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const SmallBoxContent = styled.View`
  flex-direction: row;
`;

export const BigBox = styled.View`
  padding: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  margin: 6px 0;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_6};
  `};
`;

export const SmallBox = styled.View<Props>`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  margin: 6px 6px 0 0;

  ${({ theme, isDiet }) => css`
    background-color: ${isDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `};
`;

export const Percent = styled(Animated.Text)`
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  text-align: center;

  padding-bottom: 16px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Number = styled.Text`
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Label = styled(Animated.Text)`
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
