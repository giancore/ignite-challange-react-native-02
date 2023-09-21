import { StyleSheet } from 'react-native';

import styled, { css } from 'styled-components/native';

type Props = {
  visible: boolean;
};

export const Overlayer = styled.View<Props>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 1;
  z-index: 2;
  background: rgba(0, 0, 0, 0.25);

  ${({ visible }) => css`
    display: ${visible ? 'flex' : 'none'};
  `};
`;

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Content = styled.View`
  padding: 40px 24px 24px 24px;
  border-radius: 8px;
  width: 327px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_7};
  `};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const Separator = styled.View`
  width: 12px;
`;

export const Title = styled.Text`
  margin-bottom: 32px;

  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export const ButtonStyle = StyleSheet.create({
  container: { flex: 1 },
});
