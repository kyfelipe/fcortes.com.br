import styled from 'styled-components'
import media from 'styled-media-query'

export const PostWrapper = styled.div`
  position: relative;
  width: 730px;
  margin: 0 auto 0;
  
  ${media.lessThan("large")`
    width: 100%;
  `}
`;

export const PostHeader = styled.div`
  margin: 3rem 0 1.75rem;
  
  ${media.lessThan("large")`
    margin-top: 2rem;
  `}
`;

export const PostTitle = styled.h1`
  font-family: 'Merriweather', sans-serif;
  color: var(--texts);
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 1rem;
  
  ${media.lessThan("large")`
    font-size: 2rem;
  `}
`;

export const PostDescription = styled.h2`
  color: var(--mediumTexts);
  font-size: 1.5em;
  font-weight: 200;
  margin-bottom: 1.25rem;
  
  ${media.lessThan("large")`
    font-size: 1.25rem;
  `}
`;

export const MainContent = styled.div`
  margin: auto;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--mediumTexts);
  
  &.small {
    font-size: 14px;
  }
  
  &.normal {
    font-size: 16px;
  }
  
  &.large {
    font-size: 18px;
  }
  
  p, h1, h2, h3, h4, ul, ol, .tags, iframe, .button-post {
    color: var(--texts);
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    //padding: 0 1.4rem;
  }
  
  p {
    margin: 0 auto 1.6rem;
    letter-spacing: 0;
  }
  
  h1, h2, h3, h4, h5 {
    margin: 2.4rem auto 1rem;
  }
  
  ul, ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  
  li {
    padding: 0.625rem 0;
    
    & > ul {
      margin-bottom: 0;
    }
  }
  
  p, li {
    code {
      word-wrap: break-word;
    }
  }
  
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  
  figcaption {
    color: var(--texts);
    text-align: center;
    margin-top: .5rem;
    font-weight: 300;
    font-size: 1em;
    font-style: oblique;
  }
  
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  
  blockquote {
    color: var(--texts);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
    font-style: italic;
  }
  
  hr {
    border: 1px solid var(--link);
    margin: 3rem auto;
  }
  
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  
  h1, h2, h3, h4, h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  
  h1 {
    font-size: 2.8em;
  }
  
  h2 {
    font-size: 2.1em;
  }
  
  h3 {
    font-size: 1.6em;
  }
  
  h4 {
    font-size: 1.4em;
  }
  
  h5 {
    font-size: 1.2em;
  }
  
  strong {
    font-weight: 700;
  }
  
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    
    &.lazyload {
      opacity: 0;
    }
    
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  
  .gatsby-highlight {
    //padding: 0 1.6rem 1.6rem;
    margin-bottom: 1.6rem;
  }
  
  .instagram-media {
    margin: 1rem auto !important;
  }
  
  a {
    border-bottom: 1px dashed var(--link);
    color: var(--link);
    text-decoration: none;
    transition: opacity 0.5s;
    
    svg {
      color: var(--texts);
    }
    
    &:hover {
      opacity: 0.8;
    }
  }
`;
