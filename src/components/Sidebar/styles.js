import styled from 'styled-components';

export const Container = styled.aside`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 72px;
    object-fit: cover;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px - 1.5rem - 6px);

  strong {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.gray[100]};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray[400]};
    line-height: 1.6;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[600]};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;

  a {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary.main};
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 8px;
    height: 50px;
    padding: 0 1.5rem;
    font-weight: bold;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    transition: all 0.1s;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
