import styled from 'styled-components'
import media from 'styled-media-query'
import { UpArrowAlt } from 'styled-icons/boxicons-regular'

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

export const FeatureWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 38px;
  margin: 2px;
  overflow-x: auto;
`;

export const FeatureIcon = styled.div`
  flex: 1 1 1px;
  color: var(--texts);
  margin: 0 2px;
  cursor: pointer;
`;

export const ArrowIcon = styled(UpArrowAlt)`
  height: 100%;
  width: auto;
`;
