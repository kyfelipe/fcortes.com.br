import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavbarWrapper = styled.div`
  box-shadow: 0 4px 12px 0 var(--navbarShadow);
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--background);
  color: var(--texts);
  margin: 0 auto;
  max-width: 960px;
  padding: .75rem 1.45rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
  margin: 0 .5rem;
  text-decoration: none;
  color: var(--texts);
  font-weight: 700;
  
  &.active {
    color: var(--highlight);
  }
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
`;

export const LogoLink = styled.div`
  z-index: 2;
  background-color: var(--background);
  -webkit-animation: padding-right 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 300ms both;
  animation: padding-right 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 300ms both;
  
  @-webkit-keyframes padding-right {
    0% {
      padding-right: 23px;
    }
    
    100% {
      padding-right: 14px;
    }
  }
  
  @keyframes padding-right {
    0% {
      padding-right: 23px;
    }
    
    100% {
      padding-right: 14px;
    }
  }
  
  &.no-animate {
    -webkit-animation: none;
    animation: none;
    padding-right: 14px;
  }
`;

export const Logo = styled.img`
  height: 2.5rem;
  margin: auto;
  width: auto;
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
`;

export const FeatureWrapper = styled.div`
  border-left: 1px solid var(--texts);
  display: flex;
  flex-direction: row;
  margin-left: .15rem;
`;

export const SocialWrapper = styled.div`
  border-left: 1px solid var(--texts);
  display: flex;
  flex-direction: row;
  margin-left: .5rem;
`;

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: .5rem;
  text-decoration: none;
  color: var(--texts);
  cursor: pointer;
  
  a:visited {
    text-decoration: inherit;
    color: inherit;
  }
  
  a:link {
    text-decoration: inherit;
    color: inherit;
  }
`;
