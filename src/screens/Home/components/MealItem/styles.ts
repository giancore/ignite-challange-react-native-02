import styled, { css } from 'styled-components/native';

type StatusProps = {
  isDiet: boolean;
};

export const Container = styled.View`
  padding: 12px 14px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border: 1px solid ${theme.COLORS.GRAY_5};
  `};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 14px;

  ${({ theme, isDiet }) => css`
    background-color: ${isDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  `};
`;

export const Hour = styled.Text`
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  margin-right: 12px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Name = styled.Text`
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  margin-left: 12px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `};
`;
