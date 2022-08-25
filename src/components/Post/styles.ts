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

export const Form = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[600]};

  strong {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  textarea {
    width: 100%;
    height: 6rem;
    background: ${({ theme }) => theme.colors.gray[900]};
    border: 0;
    resize: none;
    padding: 1rem;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.gray[100]};
    line-height: 1.4;
    margin-top: 1rem;
  }

  footer {
    visibility: hidden;
    max-height: 0;

    button {
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.1s;

      &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.primary.light};
      }

      &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light};
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
  &:focus-within footer {
      visibility: visible;
      max-height: none;
    }
`;

export const CommentList = styled.div`
  margin-top: 2rem;
`;
