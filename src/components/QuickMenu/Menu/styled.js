import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.div`
  position: fixed;
  opacity: 1;
  bottom: 0;
  width: 100%;
  height: 42px;
  background-color: var(--background);
  box-shadow: 0 -4px 12px 0 var(--navbarShadow);
  
  &[hidden] {
    opacity: 0;
  }
  
  ${media.greaterThan("medium")`
    display: none;
  `}
`;
