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

export const Content = styled.ScrollView`
  flex: 1;
  padding: 40px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const DateTimeContainer = styled.View`
  margin: 24px 0;
`;

export const ButtonContainer = styled.View`
  padding: 24px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const Tag = styled.View`
  flex-direction: row;
  padding: 8px 16px;
  align-items: center;
  align-content: center;
  border-radius: 1000px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_6};
  `};
`;

const Circle = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-right: 8px;
`;

export const GreenCircle = styled(Circle)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GREEN_DARK};
  `};
`;

export const RedCircle = styled(Circle)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.RED_DARK};
  `};
`;

export const Separator = styled.View`
  height: 9px;
`;

const Bold = styled.Text`
  font-style: normal;
  font-weight: 700;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Title = styled(Bold)`
  margin-bottom: 8px;
  line-height: 26px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LLG}px;
  `};
`;

export const SmallTitle = styled(Bold)`
  margin-bottom: 8px;
  line-height: 18px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const SmallText = styled.Text`
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `};
`;
