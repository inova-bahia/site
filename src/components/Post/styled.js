import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PostBanner = styled.div`
  background: var(--gray-1) url(${props => props.background}) no-repeat center
    center;
  background-size: cover;
  height: 256px;
  animation: ${appear} 0.6s;
`;

export const Container = styled.div`
  max-width: 724px;
  margin: 0 auto;
  padding: 48px 24px;
  animation: ${appear} 0.6s;
`;

export const PostHeader = styled.header`
  margin-bottom: 80px;
`;

export const PostDate = styled.time`
  color: var(--gray-3);
  font-size: 1.125rem;
  margin-bottom: 4px;
`;

export const PostAuthor = styled.p`
  color: var(--gray-3);
  font-size: 0.875rem;
  margin-bottom: 8px;
`;

export const PostTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 16px;
`;

export const PostDescription = styled.p`
  line-height: 1.5;
  font-size: 1.25rem;
`;

export const MainContent = styled.section`
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  iframe {
    font-size: 1.25rem;
    line-height: 1.5;
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  iframe {
    padding: 0 0 1.6rem;
    width: 100%;
  }

  blockquote {
    border-left: 0.3rem solid var(--blue);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid var(--muted);
    margin: 3rem auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;
    @media screen and (max-width: 768px) {
      font-size: 1.875rem;
    }
  }

  h2 {
    font-size: 2.1rem;
    @media screen and (max-width: 768px) {
      font-size: 1.375rem;
    }
  }

  h3 {
    font-size: 1.6rem;
    @media screen and (max-width: 768px) {
      font-size: 1.125rem;
    }
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  a {
    border-bottom: 1px dashed var(--blue);
    color: var(--blue);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--black);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
