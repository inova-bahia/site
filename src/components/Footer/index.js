import React from 'react';

import SocialIcons from '../SocialIcons';

import * as S from './styled';

function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.Copy>
          © 2020 Movimento Inova Bahia. Alguns direitos reservados
        </S.Copy>

        <SocialIcons />
      </S.Container>
    </S.Footer>
  );
}

export default Footer;
