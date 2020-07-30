import React from 'react';
import { Link } from 'gatsby';

import SocialIcons from '../SocialIcons';

import logoImg from '../../images/logo.png';

import * as S from './styled';

function Header() {
  return (
    <S.Header>
      <S.SocialBar>
        <S.SocialBarContainer>
          <SocialIcons />
        </S.SocialBarContainer>
      </S.SocialBar>

      <S.HeaderContainer>
        <Link to="/">
          <S.Logo src={logoImg} />
        </Link>

        <S.Navigation>
          <S.NavigationList>
            <S.NavigationItem>
              <S.NavigationLink activeClassName="active" to="/">
                Inicio
              </S.NavigationLink>
            </S.NavigationItem>

            <S.NavigationItem>
              <S.NavigationLink activeClassName="active" to="/sobre">
                Sobre
              </S.NavigationLink>
            </S.NavigationItem>

            <S.NavigationItem>
              <S.NavigationLink activeClassName="active" to="/posts">
                Postagens
              </S.NavigationLink>
            </S.NavigationItem>
          </S.NavigationList>
        </S.Navigation>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default Header;
