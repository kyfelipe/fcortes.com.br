import styled from 'styled-components'
import media from 'styled-media-query'

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

export const PostMainWrapper = styled.div`
  margin: 3rem 0;
  
  ${media.lessThan("large")`
    margin-top: 1.5rem;
  `}
`;
