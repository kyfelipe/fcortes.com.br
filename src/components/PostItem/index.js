import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const PostItem = ({ category, title, description, author, date, timeToRead, slug, featuredImage }) => {
  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemImage>
          <S.Image fluid={featuredImage}/>
        </S.PostItemImage>
        <S.PostItemInfo>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDate>{date} • {timeToRead} min de leitura</S.PostItemDate>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
