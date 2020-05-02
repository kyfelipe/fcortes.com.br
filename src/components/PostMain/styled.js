import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const PostItemLink = styled(AniLink)`
  text-decoration: none;
  width: 100%;
  height: 50vh;
  color: var(--texts);
  
  ${media.lessThan("large")`
    height: auto;
  `}
`;

export const PostItemWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  
  ${media.lessThan("large")`
    flex-direction: column;
  `}
`;

export const PostItemImage = styled.div`
  margin-right: 17px;
  width: 455px;
  height: 350px;
  
  ${media.lessThan("large")`
    width: 100%;
    height: 200px;
  `}
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
  margin-left: 9px;
  
  ${media.lessThan("large")`
    width: 100%;
    margin-left: 0;
  `}
`;

export const PostItemTitle = styled.h2`
  font-family: 'Merriweather', sans-serif;
  font-size: 2.75rem;
  font-weight: bold;
  margin: 1.5rem 0 1rem;
  width: 92%;
  
  ${media.lessThan("large")`
    font-weight: normal;
    font-size: 1.75rem;
    margin-top: 1rem;
  `}
`;

export const PostItemDescription = styled.div`
  width: 92%;
  
  ${media.lessThan("large")`
    display: none;
  `}
`;
