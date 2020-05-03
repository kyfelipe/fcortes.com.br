import styled from 'styled-components'
import media from 'styled-media-query'

export const FloatWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 20;
  
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const FloatShadow = styled.div`
  position: absolute;
  width: 54px;
  height: 54px;
  padding: 12px;
  border-radius: 50%;
  left: -3px;
  bottom: -3px;
  z-index: 21;
  background-color: var(--background);
`;

export const FloatButton = styled.div`
  padding: 12px;
  border-radius: 50%;
  z-index: 22;
  background: linear-gradient(to right, var(--highlight), var(--link));
  box-shadow: 0 0 12px 0 var(--navbarShadow);
`;

export const Icon = styled.div`
  color: var(--white);
  width: 24px;
  height: 24px;
`;
