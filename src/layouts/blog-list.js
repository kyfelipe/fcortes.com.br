import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/page'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import PostMain from '../components/PostMain'
import Pagination from '../components/Pagination'

import * as S from '../components/PostList/styled'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges;
  const mainPost = postList[0].node;

  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage -1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <SEO
        title={`Blog`}
        description={``}
        keywords={[`blog`, `devops`, `tecnologias`, `kubernetes`, `AWS`]}
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
                key={slug}
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
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC },
      limit: $limit,
      skip: $skip
    ) {
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
`;

export default BlogList;
