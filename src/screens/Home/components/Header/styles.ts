import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 24px 0px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
`;
