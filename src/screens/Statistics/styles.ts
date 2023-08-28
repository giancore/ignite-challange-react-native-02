import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

import GoBackImg from '@assets/goBack.svg';

type Props = {
  isDiet: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 20px 0px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const Pressable = styled.Pressable``;

export const PercentBox = styled(Animated.View)<Props>`
  position: relative;
  justify-content: center;
  align-items: center;

  height: 200px;
  padding: 20px 16px;
  margin-bottom: 20px;
  border-radius: 8px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  border-radius: 20px;
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

export const Percent = styled.Text`
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

  padding-top: 32px;
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

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
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

export const GoBack = styled(GoBackImg)``;

export const GoBackContainer = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
`;
