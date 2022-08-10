import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.gray[800]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;

  img {
    height: 3.8rem;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;
