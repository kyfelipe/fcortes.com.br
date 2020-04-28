import styled from 'styled-components'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const PostItemLink = styled(AniLink)`
  text-decoration: none;
  width: 31%;
  margin: 0 1%;
  color: var(--texts);
`;

export const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PostItemImage = styled.div`
  width: 100%;
`;

export const Image = styled(Img)`
  max-height: 175px;
  background-position: 50% 50%;
  background-size: cover;
`;

export const PostItemInfo = styled.div`
  
`;

export const PostItemTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: .5rem;
`;

export const PostItemDate = styled.div`
  margin-top: .3rem;
  font-size: .95rem;
`;
