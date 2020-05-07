import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const Title = styled.h1`
  color: var(--texts);
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
`;

export const SocialAboutMe = styled.div`
  margin-bottom: 1rem;
  margin-left: -.5rem;
  
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const Text = styled.p`
  color: var(--texts);
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.7;
  margin: 0 0 1rem;
  letter-spacing: 0;
  
  &.bold {
    font-weight: bold;
  }
`;

export const AuthorText = styled.p`
  color: var(--texts);
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.7;
  margin-bottom: .5rem;
  letter-spacing: 0;
  padding-top: .25rem;
`;

export const HeadWrapper = styled.div`
  display: flex;
  
  ${media.lessThan("large")`
    flex-direction: column;
    align-items: center;
  `}
`;

export const TextHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  
  ${media.lessThan("large")`
    margin-bottom: 0;
  `}
`;

export const ProfileImageWrapper = styled.div`
  width: 138px;
  height: 138px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 2px solid var(--highlight);
  padding: 2px;
  margin-right: 1rem;
  
  ${media.lessThan("large")`
    margin-bottom: 1rem;
    margin-right: 0;
  `}
`;

export const ProfileImage = styled(Img)`
  border-radius: 50%;
`;

export const ListWrapper = styled.ul`
  color: var(--texts);
  list-style: square;
  padding-left: 3rem;
  font-size: 1.1rem;
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
`;
