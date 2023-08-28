import { TouchableOpacity } from 'react-native';

import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  border-radius: 6px;
  border: 1px solid;

  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
    border-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_2};
  `};
`;
export const IconContainer = styled.View`
  padding-right: 12px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
