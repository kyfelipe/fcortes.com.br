import styled from 'styled-components'
import media from 'styled-media-query'

export const CommentsWrapper = styled.section`
  margin: auto;
  width: 100%;
  padding: 3rem 6.4rem 3rem;
  
  iframe[src*="ads-iframe"] {
    display: none;
  }
  
  #disqus_thread {
    a {
      color: #1B68BF !important;
    }
  }
  
  ${media.lessThan("large")`
    padding: 0;
    margin-top: 2.5rem;
  `}
`

export const CommentsTitle = styled.h2`
  color: var(--texts);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
  
  ${media.lessThan("large")`
    font-size: 1.75rem;
  `}
`
