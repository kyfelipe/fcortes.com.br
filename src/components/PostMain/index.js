import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const PostMain = ({ category, title, description, author, date, timeToRead, slug, featuredImage }) => {
  const { img } = useStaticQuery(graphql`
    query authorImage {
      img: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
              ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <S.PostItemLink
      cover
      direction="top"
      bg={getThemeColor()}
      duration={0.6}
      to={slug}
    >
      <S.PostItemWrapper>
        <S.PostItemInfo>
          <S.PostItemProfile>
            <S.PostItemProfilePhotoWrapper>
              <S.PostItemProfilePhoto fixed={img.childImageSharp.fixed}/>
            </S.PostItemProfilePhotoWrapper>
            <S.PostItemProfileInfo>
              <S.PostItemProfileName>{author}</S.PostItemProfileName>
              <S.PostItemDate>{date} • {timeToRead} min de leitura</S.PostItemDate>
            </S.PostItemProfileInfo>
          </S.PostItemProfile>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
        <S.PostItemImage>
          <S.Image fluid={featuredImage}/>
        </S.PostItemImage>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
}

PostMain.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostMain;
