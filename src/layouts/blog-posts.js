import React from 'react'
import { graphql } from 'gatsby'

import Layout from './page'
import Comments from '../components/Comments'
import SEO from '../components/seo'

import * as S from '../components/Post/styled'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        keywords={post.frontmatter.category.split(',')}
      />
      <S.PostHeader>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        <S.PostInfoWrapper>
          <S.PostInfoImageWrapper>
            <S.PostInfoImage fixed={data.authorImage.childImageSharp.fixed}/>
          </S.PostInfoImageWrapper>
          <S.PostInfo>
            <S.PostInfoAuthor>{post.frontmatter.author}</S.PostInfoAuthor>
            <S.PostInfoDate>{post.frontmatter.date} &middot; {post.timeToRead} min de leitura</S.PostInfoDate>
          </S.PostInfo>
        </S.PostInfoWrapper>
      </S.PostHeader>
      {/*<S.PostImage fluid={post.frontmatter.featuredImage.childImageSharp.fluid}/>*/}
      <S.MainContent dangerouslySetInnerHTML={{ __html: post.html }}/>
      <Comments url={post.fields.slug} title={post.frontmatter.title}/>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        category
        date(formatString: "MMM DD[,] YYYY", locale: "pt-br")
        description
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      timeToRead
      fields {
        slug
      }
    }
    authorImage: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default BlogPost;
