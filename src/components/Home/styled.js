import styled, { keyframes } from 'styled-components';

import introBackgroundImg from '../../images/intro-background.svg';
import introBackgroundMobileImg from '../../images/intro-background-mobile.svg';
import patternBackgroundImg from '../../images/pattern-background.svg';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Intro = styled.section`
  animation: ${appear} 0.6s;
  background: url(${introBackgroundImg}) no-repeat;
  background-position: 700px;
  height: calc(100vh - 112px);

  @media screen and (max-width: 1200px) {
    background-position: 400px;
  }
  @media screen and (max-width: 500px) {
    background: url(${introBackgroundMobileImg}) no-repeat bottom;
    background-size: contain;
  }
  @media screen and (max-width: 340px) {
    height: auto;
  }
`;

export const IntroContainer = styled.div`
  max-width: 1216px;
  height: 100%;
  padding: 24px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 340px) {
    height: auto;
  }
`;

export const IntroContent = styled.div`
  max-width: 488px;
`;

export const IntroTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 4rem;
  color: var(--blue);
  margin-bottom: 24px;

  span {
    color: var(--red);
  }

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const IntroText = styled.p`
  color: var(--gray-3);
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const IntroButton = styled.button`
  padding: 20px 48px;
  font-size: 1.25rem;
  border: none;
  color: var(--white);
  background: var(--blue);
`;

export const Differences = styled.section`
  background: url(${patternBackgroundImg});
`;

export const DifferencesContainer = styled.section`
  max-width: 1216px;
  padding: 128px 24px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const DifferencesItem = styled.article`
  max-width: 384px;
  justify-self: center;
  background: var(--white);
  border: 1px solid #ced4d8;
  border-radius: 10px;
  padding: 48px 32px;
`;

export const DifferencesImage = styled.img`
  margin-bottom: 24px;
`;

export const DifferencesTitle = styled.h1`
  margin-bottom: 16px;
  color: var(--gray-3);
  font-size: 1.5rem;
`;

export const DifferencesText = styled.p`
  color: var(--gray-2);
  line-height: 1.5;
`;
