import styled from 'styled-components'
import media from 'styled-media-query'

export const FloatWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1;
  
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const FloatShadow = styled.div`
  position: absolute;
  width: 52px;
  height: 52px;
  padding: 12px;
  border-radius: 50%;
  left: -2px;
  z-index: 2;
  background-color: var(--background);
`;

export const FloatButton = styled.div`
  padding: 12px;
  border-radius: 50%;
  z-index: 3;
  background: linear-gradient(to right, var(--highlight), var(--link));
`;

export const Icon = styled.div`
  color: var(--texts);
  width: 24px;
  height: 24px;
`;
