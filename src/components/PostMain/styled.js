import styled from 'styled-components'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const PostItemLink = styled(AniLink)`
  text-decoration: none;
  width: 100%;
  height: 50vh;
  color: var(--texts);
`;

export const PostItemWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const PostItemProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PostItemProfilePhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #1B68BF;
  padding: 2px;
`;

export const PostItemProfilePhoto = styled(Img)`
  border-radius: 50%;
`;

export const PostItemProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: .75rem;
`;

export const PostItemImage = styled.div`
  margin-right: 14px;
  width: 455px;
  height: 350px;
`;

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: cover;
`;

export const PostItemInfo = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 14px;
`;

export const PostItemTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 1.5rem 0;
  width: 92%;
`;

export const PostItemDate = styled.div`
  font-size: .95rem;
`;

export const PostItemProfileName = styled.div`
  font-weight: 700;
`;

export const PostItemDescription = styled.div`
  width: 92%;
`;
