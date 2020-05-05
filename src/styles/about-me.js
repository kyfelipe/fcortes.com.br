import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleWrapper = styled.h1`
  ${media.lessThan("large")`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `}
`;

export const Title = styled.h1`
  color: var(--texts);
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const SocialAboutMe = styled.div`
  margin-bottom: 1rem;
  margin-left: -.5rem;
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const Text = styled.h1`
  color: var(--texts);
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.7;
  margin: 0 auto 1.6rem;
  letter-spacing: 0;
`;
