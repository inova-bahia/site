import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import * as S from '../components/Post/styled';

function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <S.PostBanner background={post.frontmatter.image} />
      <S.Container>
        <S.PostHeader>
          <S.PostDate>
            {post.frontmatter.date} • {post.timeToRead} min de leitura
          </S.PostDate>
          <S.PostAuthor>{post.frontmatter.author}</S.PostAuthor>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        </S.PostHeader>

        <S.MainContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.Container>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        title
        description
        author
        image
      }
    }
  }
`;

export default BlogPost;
