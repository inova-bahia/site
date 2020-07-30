import React from 'react';

import robotImg from '../../images/robot.svg';
import lightImg from '../../images/light.svg';
import plantImg from '../../images/plant.svg';

import * as S from './styled';
import { Link } from 'gatsby';

function Home() {
  return (
    <>
      <S.Intro>
        <S.IntroContainer>
          <S.IntroContent>
            <S.IntroTitle>
              Movimento Inova <span>Bahia</span>
            </S.IntroTitle>
            <S.IntroText>
              Nunca é demais lembrar o peso e o significado destes problemas,
              uma vez que a consulta aos diversos militantes agrega valor ao
              estabelecimento dos relacionamentos verticais entre as
              hierarquias.
            </S.IntroText>
            <Link to="/sobre">
              <S.IntroButton>Fique por dentro</S.IntroButton>
            </Link>
          </S.IntroContent>
        </S.IntroContainer>
      </S.Intro>

      <S.Differences>
        <S.DifferencesContainer>
          <S.DifferencesItem>
            <S.DifferencesImage src={robotImg} alt="robot" />
            <S.DifferencesTitle>Lorem ipsum</S.DifferencesTitle>
            <S.DifferencesText>
              Caros amigos, o desenvolvimento contínuo de distintas formas de
              atuação aponta para a melhoria dos conhecimentos estratégicos para
              atingir a excelência.
            </S.DifferencesText>
          </S.DifferencesItem>

          <S.DifferencesItem>
            <S.DifferencesImage src={lightImg} alt="robot" />
            <S.DifferencesTitle>Lorem ipsum</S.DifferencesTitle>
            <S.DifferencesText>
              Caros amigos, o desenvolvimento contínuo de distintas formas de
              atuação aponta para a melhoria dos conhecimentos estratégicos para
              atingir a excelência.
            </S.DifferencesText>
          </S.DifferencesItem>

          <S.DifferencesItem>
            <S.DifferencesImage src={plantImg} alt="robot" />
            <S.DifferencesTitle>Lorem ipsum</S.DifferencesTitle>
            <S.DifferencesText>
              Caros amigos, o desenvolvimento contínuo de distintas formas de
              atuação aponta para a melhoria dos conhecimentos estratégicos para
              atingir a excelência.
            </S.DifferencesText>
          </S.DifferencesItem>
        </S.DifferencesContainer>
      </S.Differences>
    </>
  );
}

export default Home;
