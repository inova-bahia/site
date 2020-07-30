import React from 'react';

import * as S from './styled';

import NatanaDuarteImg from '../../images/NatanaDuarte.jpg';
import LiuSouzaImg from '../../images/LiuSouza.jpg';
import GabrielSilasImg from '../../images/GabrielSilas.jpg';
import DiegoAragaoImg from '../../images/DiegoAragao.jpg';
import BrendoVarjaoImg from '../../images/BrendoVarjao.jpg';
import TércioSallesImg from '../../images/TercioSalles.jpg';
import VictorCalazansImg from '../../images/VictorCalazans.jpg';

function Sobre() {
  return (
    <S.Container>
      <S.Content>
        <h1>Sobre</h1>
        <p>
          O Movimento Inova Bahia (MIB) é resultado da insatisfação do povo
          baiano com as práticas da "velha política", aliada ao anseio da nossa
          população por alternativas políticas inovadoras, distantes da
          polarização habitual da política que tanto faz mal ao nosso país e ao
          nosso estado.
        </p>
        <p>
          O MIB surge como um coletivo de baianos movidos pelo desejo de
          converter sua indignação com o atual quadro e o desejo de servir em
          ação política real; pretendemos propor novas estratégias, novos
          caminhos, que extraiam o que cada ideologia tem de melhor numa síntese
          que faça sentido para o nosso estado.
        </p>
        <p>
          Enquanto movimento político espontâneo, o MIB é suprapartidário, e, ao
          mesmo tempo em que propõe o diálogo com diferentes setores da
          sociedade baiana a fim de agregar valores e propostas numa plataforma
          justa e viável de fazer política, recusa a vinculação a qualquer grupo
          específico e a subserviência a qualquer interesse que não seja o do
          povo baiano.
        </p>
        <p>
          É necessário pensar novos objetivos e novos métodos para se chegar lá;
          é necessário inovar. Por uma política inovadora, livre das amarras
          ideológicas e partidárias habituais, é que estamos aqui. Junte-se você
          também ao Movimento Inova Bahia!
        </p>
      </S.Content>

      <S.Collaborators>
        <S.Collaborator>
          <S.CollaboratorImage src={NatanaDuarteImg} alt="Natana Duarte" />
          <S.CollaboratorName>Natana Duarte</S.CollaboratorName>
          <S.CollaboratorRole>Assuntos Jurídicos</S.CollaboratorRole>
        </S.Collaborator>
        <S.Collaborator>
          <S.CollaboratorImage src={LiuSouzaImg} alt="Liu Souza" />
          <S.CollaboratorName>Liu Souza</S.CollaboratorName>
          <S.CollaboratorRole>Vice Presidente</S.CollaboratorRole>
        </S.Collaborator>
        <S.Collaborator>
          <S.CollaboratorImage src={GabrielSilasImg} alt="Gabriel Silas" />
          <S.CollaboratorName>Gabriel Silas</S.CollaboratorName>
          <S.CollaboratorRole>Assuntos Jurídicos</S.CollaboratorRole>
        </S.Collaborator>
        <S.Collaborator>
          <S.CollaboratorImage src={DiegoAragaoImg} alt="Diego Aragão" />
          <S.CollaboratorName>Diego Aragão</S.CollaboratorName>
          <S.CollaboratorRole>Relações Institucionais</S.CollaboratorRole>
        </S.Collaborator>
        <S.Collaborator>
          <S.CollaboratorImage src={BrendoVarjaoImg} alt="Brendo Varjão" />
          <S.CollaboratorName>Brendo Varjão</S.CollaboratorName>
          <S.CollaboratorRole>Gestão de Pessoas</S.CollaboratorRole>
        </S.Collaborator>
        <S.Collaborator>
          <S.CollaboratorImage src={TércioSallesImg} alt="Tércio Salles" />
          <S.CollaboratorName>Tércio Salles</S.CollaboratorName>
          <S.CollaboratorRole>Comunicação e Publicidade</S.CollaboratorRole>
        </S.Collaborator>
        <S.Collaborator>
          <S.CollaboratorImage src={VictorCalazansImg} alt="Victor Calazans" />
          <S.CollaboratorName>Victor Calazans</S.CollaboratorName>
          <S.CollaboratorRole>Adiministração Financeira</S.CollaboratorRole>
        </S.Collaborator>
      </S.Collaborators>
    </S.Container>
  );
}

export default Sobre;
