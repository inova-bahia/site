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
              Nunca é demais lembrar o peso e o significado da inovação na
              história da humanidade, é a partir dela que se cria a
              possibilidade de enxergar novos horizontes e novas soluções para
              os problemas sociais. Na política não deve ser diferente, mas para
              isso, precisamos promover a renovação e a inovação como
              ferramentas de emancipação popular.
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
            <S.DifferencesTitle>Tecnologia</S.DifferencesTitle>
            <S.DifferencesText>
              Nós acreditamos que a única maneira de aproximar a política da
              população é através de novas tecnologias que possibilitam a
              participação, acessibilidade e a informatização dos meios
              comunicação.
            </S.DifferencesText>
          </S.DifferencesItem>

          <S.DifferencesItem>
            <S.DifferencesImage src={lightImg} alt="robot" />
            <S.DifferencesTitle>Inovação</S.DifferencesTitle>
            <S.DifferencesText>
              Deve ser o motor que conduz o desenvolvimento e o bem estar
              social, promovendo uma gestão pública empreendedora e criativa que
              possibilite novos caminhos nas decisões políticas.
            </S.DifferencesText>
          </S.DifferencesItem>

          <S.DifferencesItem>
            <S.DifferencesImage src={plantImg} alt="robot" />
            <S.DifferencesTitle>Sustentabilidade</S.DifferencesTitle>
            <S.DifferencesText>
              A única forma de promover um futuro saudável, tendo em vista que
              os recursos naturais são escassos, é garantindo a produtividade,
              minimizando os custos ambientais e evitando desperdícios.
            </S.DifferencesText>
          </S.DifferencesItem>
        </S.DifferencesContainer>
      </S.Differences>
    </>
  );
}

export default Home;
