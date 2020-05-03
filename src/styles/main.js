import styled from 'styled-components'
import media from 'styled-media-query'

const Main = styled.main`
  position: relative;
  width: 960px;
  margin: 3rem auto 0;
  padding: 0 0.8rem 1.45rem;
  
  ${media.lessThan("large")`
    width: 95%;
  `}
`;

export default Main;
