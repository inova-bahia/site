import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  animation: ${appear} 0.6s;
  max-width: 1216px;
  margin: 0 auto;
  padding: 80px 0px;
  display: flex;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    padding: 24px 0px;
  }
`;

export const Content = styled.section`
  max-width: 520px;
  padding: 0 24px;

  h1 {
    font-size: 2rem;
    margin-bottom: 24px;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.5;
    margin-bottom: 1.125rem;
  }

  @media screen and (max-width: 850px) {
    max-width: 100%;
  }
`;

export const Collaborators = styled.section`
  align-self: flex-start;
  margin-left: 104px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, auto));
  gap: 32px;
  padding: 0 24px;
  width: 100%;

  @media screen and (max-width: 1100px) {
    margin-left: 0px;
  }
`;

export const Collaborator = styled.div``;

export const CollaboratorImage = styled.img`
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const CollaboratorName = styled.h2`
  font-size: 1.25rem;
  color: var(--blue);
  text-align: center;
  margin-bottom: 8px;

  @media screen and (max-width: 970px) {
    font-size: 1.125rem;
  }
`;

export const CollaboratorRole = styled.p`
  color: var(--gray-3);
  font-size: 0.875rem;
  text-align: center;
`;
