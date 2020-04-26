import styled from 'styled-components'
import Img from 'gatsby-image'

export const PostHeader = styled.div`
  margin: 3rem 0 1.75rem;
`;

export const PostTitle = styled.h1`
  color: var(--texts);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const PostDescription = styled.h2`
  color: var(--mediumTexts);
  font-size: 1.5rem;
  font-weight: 200;
  margin-bottom: 1.25rem;
`;

export const PostInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const PostInfoImageWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 2px solid var(--highlight);
  padding: 2px;
`;

export const PostInfoImage = styled(Img)`
  border-radius: 50%;
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: -.25rem;
`;

export const PostInfoAuthor = styled.p`
  color: var(--texts);
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
`;

export const PostInfoDate = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: var(--texts);
`;

export const PostImage = styled(Img)`
  max-height: 24rem;
  background-position: 50% 50%;
  background-size: cover;
  margin-bottom: 1.5rem;
`;

export const MainContent = styled.div`
  margin: auto;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--mediumTexts);
  
  p, h1, h2, h3, h4, ul, ol, .tags, iframe, .button-post {
    color: var(--texts);
    font-size: 1.25rem;
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
    font-size: 1rem;
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
    font-size: 2.8rem;
  }
  
  h2 {
    font-size: 2.1rem;
  }
  
  h3 {
    font-size: 1.6rem;
  }
  
  h4 {
    font-size: 1.4rem;
  }
  
  h5 {
    font-size: 1.2rem;
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
