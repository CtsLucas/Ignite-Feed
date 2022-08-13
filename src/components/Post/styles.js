import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  padding: 2.5rem;

  & + & {
    margin-top: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  time {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > img {
    width: calc(3rem + 12px);
    right: calc(3rem + 12px);
    border-radius: 8px;
    border: 4px solid ${({ theme }) => theme.colors.gray[800]};
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: ${({ theme }) => theme.colors.gray[100]};
    line-height: 1.6;
  }

  span {
    color: ${({ theme }) => theme.colors.gray[400]};
    line-height: 1.6;
    font-size: 0.875rem;
  }
`;

export const Content = styled.div`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[300]};
  margin-top: 1.5rem;

  p {
    margin-top: 1rem;

    a {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    a:hover {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }
`;
