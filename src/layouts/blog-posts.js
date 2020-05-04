import React from "react"
import { graphql } from 'gatsby'

import Layout from './page'
import SEO from '../components/seo'
import Profile from '../components/Profile'
import Comments from '../components/Comments'

import * as S from '../components/Post/styled'

const getFontSize = () => {
  return typeof window !== 'undefined' && window.localStorage.getItem("font_size");
}

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const fontSize = getFontSize();

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        keywords={post.frontmatter.category.split(',')}
      />
      <S.PostWrapper>
        <S.PostHeader>
          <S.PostTitle id="post_title" className={fontSize}>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription id="post_description" className={fontSize}>{post.frontmatter.description}</S.PostDescription>
          <Profile
            authorImage={data.authorImage.childImageSharp.fixed}
            author={post.frontmatter.author}
            date={post.frontmatter.date}
            timeToRead={post.timeToRead}
          />
        </S.PostHeader>
        <S.MainContent id="post_body" className={fontSize} dangerouslySetInnerHTML={{ __html: post.html }}/>
      </S.PostWrapper>
      <Comments url={post.fields.slug} title={post.frontmatter.title}/>
    </Layout>
  );
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
