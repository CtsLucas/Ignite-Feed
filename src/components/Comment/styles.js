import styled from 'styled-components';

export const Cointainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  & > img {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }
`;

export const CommentBox = styled.div`
  flex: 1;

  footer {
    margin-top: 1rem;

    button {
      background: transparent;
      border: 0;
      color: ${({ theme }) => theme.colors.gray[400]};
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.light};
      }

      & > svg {
        margin-right: 0.625rem;
      }

      & > span::before {
        content: "•";
        padding: 0 0.25rem;
      }
    }
  }
`;

export const CommentContent = styled.div`
  background: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 8px;
  padding: 1rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button {
      background: transparent;
      border: 0;
      color: ${({ theme }) => theme.colors.gray[400]};
      line-height: 0;
      border-radius: 2px;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.danger.main};
      }
    }

    p {
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }
`;

export const AuthorAndTime = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 0.875rem;
    line-height: 1.6;
  }

  time {
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
