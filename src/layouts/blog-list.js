import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import {animateScroll as scroll, scroller } from 'react-scroll'

import Layout from '../layouts/page'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import PostMain from '../components/PostMain'
import Pagination from '../components/Pagination'

import * as S from '../components/PostList/styled'

let nodes = [];
let scrollNewPage = 500;
let currentHeight = 0;

function updateScrollNewPage() {
  scrollNewPage += 500;
}

class BlogList extends React.Component {
  postList = this.props.data.allMarkdownRemark.edges;

  constructor(props) {
    super(props);
    console.log(props.pageContext);
  }

  handleScroll = () => {
    currentHeight = window.scrollY;
    console.log(currentHeight);
    const { currentPage, numPages } = this.props.pageContext;
    const isLast = currentPage < numPages;
    // console.log(currentPage, numPages);
    if (window.scrollY / scrollNewPage >= 1 && isLast) {
      // console.log(currentPage, numPages);
      // console.log('Last:' ,isLast);
      updateScrollNewPage();
      document.getElementById('next').click();
    }
    // console.log(scrollNewPage);
  }

  componentDidMount() {
    this.postList.forEach(edge => {
      nodes.push(edge.node);
      console.log(nodes);
    });

    console.log('componentDidMount - current: ', currentHeight);
    window.addEventListener(`scroll`, this.handleScroll);
  }

  componentWillUnmount() {
    console.log('destroi');

  }

  render() {
    scroller.scrollTo('test', {
      duration: 3000,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
    if (currentHeight !== 0) {
      console.log('render - current: ', currentHeight);
      scroll.scrollTo(currentHeight);
    }
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage -1 === 1 ? '/' : `/page/${currentPage - 1}`;
    const nextPage = `/page/${currentPage + 1}`;

    return (
      <Layout name="test">
        <SEO
          title={`Blog`}
          description={``}
          keywords={[`blog`, `devops`, `tecnologias`, `kubernetes`, `AWS`]}
        />

        <S.ListWrapper>
          {nodes.map((
            {
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
              return (
                <S.PostMainWrapper>
                  <PostMain
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
                </S.PostMainWrapper>
              );
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
