import styled, { css } from 'styled-components';

interface AvatarProps {
  hasBorder?: boolean;
}

export const Container = styled.div<AvatarProps>`
  & > img {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;

    ${({ hasBorder }) => hasBorder === true && css`
        width: calc(3rem + 12px);
        height: calc(3rem + 12px);
        border-radius: 8px;
        border: 4px solid ${({ theme }) => theme.colors.gray[800]};
        outline: 2px solid ${({ theme }) => theme.colors.primary.main};
      `};
  }
`;
