import { ArrowUpRight } from 'phosphor-react-native';
import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

type Props = {
  isDiet: boolean;
};

export const Pressable = styled.Pressable``;

export const PercentBox = styled(Animated.View)<Props>`
  justify-content: center;
  align-items: center;

  height: 100px;
  padding: 20px 16px;
  margin-bottom: 20px;
  border-radius: 8px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
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

export const Open = styled(ArrowUpRight)`
  position: absolute;
  top: 8px;
  right: 8px;
`;
