import React from 'react';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { Youtube } from '@styled-icons/boxicons-logos/Youtube';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt';

import * as S from './styled';

function SocialIcons() {
  return (
    <S.List>
      <S.Item>
        <S.Link
          href="https://facebook.com"
          target="_blank"
          title="Facebook"
          rel="noopener norefer"
        >
          <Facebook />
        </S.Link>
      </S.Item>

      <S.Item>
        <S.Link
          href="https://youtube.com"
          target="_blank"
          title="Youtube"
          rel="noopener norefer"
        >
          <Youtube />
        </S.Link>
      </S.Item>

      <S.Item>
        <S.Link
          href="https://Linkedin.com"
          target="_blank"
          title="Linkedin"
          rel="noopener norefer"
        >
          <LinkedinSquare />
        </S.Link>
      </S.Item>

      <S.Item>
        <S.Link
          href="https://twitter.com"
          target="_blank"
          title="Twitter"
          rel="noopener norefer"
        >
          <Twitter />
        </S.Link>
      </S.Item>

      <S.Item>
        <S.Link
          href="https://instagram.com"
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
