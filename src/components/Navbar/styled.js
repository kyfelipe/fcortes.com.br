import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const NavbarWrapper = styled.div`
  box-shadow: 0 4px 12px 0 var(--navbarShadow);
  width: 100vw;
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--background);
  color: var(--texts);
  margin: 0 auto;
  max-width: 960px;
  padding: .75rem 1.45rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavbarLink = styled(AniLink)`
  margin: 0 .5rem;
  text-decoration: none;
  color: var(--texts);
  font-weight: 700;
  
  &.active {
    color: var(--highlight);
  }
  
  ${media.lessThan("large")`
    display: none;
  `}
`;

export const FeatureWrapper = styled.div`
  border-left: 1px solid var(--texts);
  display: flex;
  flex-direction: row;
  margin: 0 .75rem 0 .2rem;
  
  ${media.lessThan("large")`
    border-left: none;
    margin: 0;
  `}
`;

export const SocialNav = styled.div`
  border-left: 1px solid var(--texts);
  margin-left: .25rem;
  
  ${media.lessThan("large")`
    display: none;
  `}
`;

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: .5rem;
  text-decoration: none;
  color: var(--texts);
  cursor: pointer;
  
  a:visited {
    text-decoration: inherit;
    color: inherit;
  }
  
  a:link {
    text-decoration: inherit;
    color: inherit;
  }
`;
