import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.div`
  ${media.greaterThan("medium")`
    display: none;
  `}
`;
