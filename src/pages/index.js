import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../layouts/page'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

import * as S from '../components/PostList/styled'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
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

  return (
    <Layout>
      <SEO
        title={`Blog`}
        description={``}
        keywords={[`gatsby`, `application`, `react`]}
      />
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
            )
          }
          return (<div></div>);
        })}
      </S.ListWrapper>
    </Layout>
  );
}

export default IndexPage;
