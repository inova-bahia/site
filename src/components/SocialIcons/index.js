import React from 'react';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { Youtube } from '@styled-icons/boxicons-logos/Youtube';
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt';

import * as S from './styled';

function SocialIcons() {
  return (
    <S.List>
      <S.Item>
        <S.Link
          href="https://www.facebook.com/MIB-Movimento-Inova-Bahia-651649751959561/"
          target="_blank"
          title="Facebook"
          rel="noopener norefer"
        >
          <Facebook />
        </S.Link>
      </S.Item>

      <S.Item>
        <S.Link
          href="https://www.youtube.com/channel/UC4SlAld4roArkbSgk1ERNBw/featured"
          target="_blank"
          title="Youtube"
          rel="noopener norefer"
        >
          <Youtube />
        </S.Link>
      </S.Item>

      <S.Item>
        <S.Link
          href="https://www.instagram.com/movimentoinovaba/"
          target="_blank"
          title="Instagram"
          rel="noopener norefer"
        >
          <InstagramAlt />
        </S.Link>
      </S.Item>
    </S.List>
  );
}

export default SocialIcons;
