import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Header = styled.div`
  padding: 80px 24px 124px 24px;
  animation: ${appear} 0.6s;
`;

export const Title = styled.h1`
  max-width: 600px;
  font-size: 3rem;
  text-align: center;
  color: var(--blue);
  margin: 0 auto;
  margin-bottom: 16px;

  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: var(--gray-3);
  font-size: 1.125rem;
`;

export const PostsContainer = styled.section`
  animation: ${appear} 0.6s;
  max-width: 1216px;
  padding: 0 24px 80px 24px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const Post = styled.article`
  border: 1px solid var(--muted);
  border-radius: 0px 0px 10px 10px;
`;

export const PostInfo = styled.div`
  padding: 24px 24px 32px 24px;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.08);
  }
`;

export const PostTitle = styled.h1`
  color: var(--black);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const PostResume = styled.p`
  color: var(--gray-3);
  margin-bottom: 24px;
`;

export const PostDate = styled.time`
  color: var(--gray-2);
  font-size: 0.875rem;
`;
