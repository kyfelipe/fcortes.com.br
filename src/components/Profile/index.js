import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Profile = ({ authorImage, author, date, timeToRead}) => (
  <S.ProfileWrapper>
    <S.ProfileImageWrapper>
      <S.ProfileImage fixed={authorImage}/>
    </S.ProfileImageWrapper>
    <S.Profile>
      <S.Author>{author}</S.Author>
      <S.Date>{date} &middot; {timeToRead} min de leitura</S.Date>
    </S.Profile>
  </S.ProfileWrapper>
);

Profile.propTypes = {
  authorImage: PropTypes.any.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired
};

export default Profile;
