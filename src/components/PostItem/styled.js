import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const PostItemLink = styled(AniLink)`
  text-decoration: none;
  width: 31%;
  margin: 0 1% 2rem;
  color: var(--texts);
  
  ${media.lessThan("large")`
    width: 100%;
    margin: 0 0 1.5rem 0;
  `}
`;

export const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  
  ${media.lessThan("large")`
    flex-direction: row-reverse;
  `}
`;

export const PostItemImage = styled.div`
  width: 100%;
  
  ${media.lessThan("large")`
    width: auto;
    margin-left: .35rem;
  `}
`;

export const Image = styled(Img)`
  height: 175px;
  background-position: 50% 50%;
  background-size: cover;
  
  ${media.lessThan("large")`
    height: 100px;
    width: 100px;
  `}
`;

export const PostItemInfo = styled.div`
  
`;

export const PostItemTitle = styled.h2`
  font-family: 'Merriweather', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: .5rem;
  
  ${media.lessThan("large")`
    font-size: 1.1rem;
    font-weight: 600;
    display: -webkit-box;
    max-height: 40px;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.15;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `}
`;

export const PostItemDate = styled.div`
  margin-top: .3rem;
  font-size: .95rem;
  
  ${media.lessThan("large")`
    font-size: .8rem;
  `}
`;
