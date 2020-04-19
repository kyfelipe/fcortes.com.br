import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../layouts/page'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import PostMain from '../components/PostMain'

import * as S from '../components/PostList/styled'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
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
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const postList = allMarkdownRemark.edges;
  const mainPost = postList[0].node;

  return (
    <Layout>
      <SEO
        title={`Blog`}
        description={``}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <S.PostMainWrapper>
        <PostMain
          title={mainPost.frontmatter.title}
          description={mainPost.frontmatter.description}
          category={mainPost.frontmatter.category}
          timeToRead={mainPost.timeToRead}
          author={mainPost.frontmatter.author}
          date={mainPost.frontmatter.date}
          slug={mainPost.fields.slug}
          featuredImage={mainPost.frontmatter.featuredImage.childImageSharp.fluid}
        />
      </S.PostMainWrapper>
      <S.ListWrapper>
        {postList.map((
          {
            node: {
              frontmatter: {
                author,
                category,
                date,
                description,
                title,
                featuredImage: {
                  childImageSharp: {
                    fluid
                  }
                }
              },
              timeToRead,
              fields: {
                slug
              }
            }
          }, index) => {
          if (index !== 0) {
            return (
              <PostItem
                title={title}
                description={description}
                category={category}
                timeToRead={timeToRead}
                author={author}
                date={date}
                slug={slug}
                featuredImage={fluid}
              />
            );
          } else {
            return (<></>);
          }
        })}
      </S.ListWrapper>
    </Layout>
  );
}

export default IndexPage;
