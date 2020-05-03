import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const LogoWrapper = styled(AniLink)`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
`;

export const LogoLink = styled.div`
  --initial-padding: 14px;
  --final-padding: 14px;
  z-index: 2;
  background-color: var(--background);
  -webkit-animation: padding-right 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 300ms both;
  animation: padding-right 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 300ms both;
  
  @-webkit-keyframes padding-right {
    0% {
      padding-right: var(--initial-padding);
    }
    
    100% {
      padding-right: var(--final-padding);
    }
  }
  
  @keyframes padding-right {
    0% {
      padding-right: var(--initial-padding);
    }
    
    100% {
      padding-right: var(--final-padding);
    }
  }
  
  &.no-animate {
    -webkit-animation: none;
    animation: none;
    padding-right: var(--final-padding);
  }
  
  ${media.lessThan("large")`
    height: 2rem;
    padding-right: 10px!important;
  `}
`;

export const Logo = styled.img`
  height: 2.5rem;
  margin: auto;
  width: auto;
  
  ${media.lessThan("large")`
    height: 2rem;
  `}
`;

export const LogoName = styled.div`
  position: absolute;
  top: 6px;
  line-height: 17px;
  z-index: 1;
  font-family: 'Spartan', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1.05rem;
  color: var(--texts);
  user-select: none;
  
  -webkit-animation: slide-right 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 300ms both;
  animation: slide-right 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 300ms both;
  
  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
    }
    
    100% {
      -webkit-transform: translateX(53px);
              transform: translateX(53px);
    }
  }
  
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
    }
    
    100% {
      -webkit-transform: translateX(53px);
              transform: translateX(53px);
    }
  }
  
  &.no-animate {
    -webkit-animation: none;
    animation: none;
    transform: translateX(53px);
  }
  
  ${media.lessThan("large")`
    font-size: .95rem;
    top: 1px;
    transform: translateX(43px)!important;
  `}
`;
