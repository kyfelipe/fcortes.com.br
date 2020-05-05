import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const NotFoundWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: var(--texts);
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: .25rem;
`;

export const SubTitle = styled.h2`
  color: var(--texts);
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const BackHome = styled(AniLink)`
  color: var(--texts);
  font-size: 1.1rem;
  margin-top: 2rem;
  font-weight: 300;
  line-height: 1.7;
  letter-spacing: 0;
`;
