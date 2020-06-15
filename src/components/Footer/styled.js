import styled from 'styled-components';

export const Footer = styled.footer`
  background: var(--blue);
`;

export const Container = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }

  svg {
    color: var(--white);
  }
`;

export const Copy = styled.p`
  font-weight: 600;
  color: var(--white);

  @media screen and (max-width: 680px) {
    margin-bottom: 24px;
  }
`;
