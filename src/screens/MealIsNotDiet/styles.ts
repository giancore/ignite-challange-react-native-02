import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const Feedback = styled.View``;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.View`
  padding: 24px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 8px;

  font-style: normal;
  font-weight: 700;
  line-height: 32px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.RED_DARK};
  `};
`;

export const Text = styled.Text`
  text-align: center;

  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Strong = styled(Text)`
  font-weight: 700;
`;
