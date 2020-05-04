import styled from 'styled-components'
import media from 'styled-media-query'
import { FormatSize, ArrowUpward } from 'styled-icons/material'

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
  align-items: center;
`;

export const FeatureIcon = styled.div`
  color: var(--texts);
  margin: 0 .35rem;
  cursor: pointer;
`;

export const ArrowIcon = styled(ArrowUpward)`
  height: 32px;
  width: 32px;
`;

export const FontSizeIcon = styled(FormatSize)`
  height: 32px;
  width: 32px;
  
  &.active {
    fill: var(--highlight);
  }
`;

export const FontSizeWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: var(--texts);
  margin-left: .2rem;
  border-bottom: var(--highlight) 2px solid;
  
  &[hidden] {
    display: none;
  }
`;

export const FontSizeType = styled.span`
  margin: 0 .5rem;
  cursor: pointer;
  
  &.active {
    color: var(--link);
    font-weight: bold;
  }
`;
