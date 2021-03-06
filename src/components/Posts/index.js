import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import * as S from './styled';

function Posts() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt
            timeToRead
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <S.Header>
        <S.Title>Acompanhe nossas postagens.</S.Title>
        <S.Subtitle>Aqui você irá encontrar uma série de conteúdo.</S.Subtitle>
      </S.Header>
      <S.PostsContainer>
        {data.allMarkdownRemark.edges.map(({ node: post }) => (
          <S.Post key={post.id}>
            <Link to={post.fields.slug}>
              <S.ImageWrapper>
                {/* <S.PostImage src={post.frontmatter.image} /> */}
                <S.PostImage
                  fluid={post.frontmatter.image.childImageSharp.fluid}
                  alt={post.frontmatter.title}
                />
              </S.ImageWrapper>
            </Link>

            <S.PostInfo>
              <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
              <S.PostResume>{post.excerpt}</S.PostResume>
              <S.PostDate>
                {post.frontmatter.date} • {post.timeToRead} min de leitura
              </S.PostDate>
            </S.PostInfo>
          </S.Post>
        ))}
      </S.PostsContainer>
    </>
  );
}

export default Posts;
