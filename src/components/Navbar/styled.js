import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavbarWrapper = styled.div`
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  color: #212121;
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
  color: #212121;
  font-weight: 700;
  
  &.active {
    color: #1B68BF;
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
  background-color: white;
  padding-right: 11px;
`;

export const Logo = styled.img`
  height: 2.5rem;
  margin: auto;
  width: auto;
`;


export const LogoName = styled.div`
  position: absolute;
  line-height: 1.1;
  z-index: 1;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1.05rem;
  color: #212121;
  user-select: none;
  
  -webkit-animation: slide-right 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 300ms both;
  animation: slide-right 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 300ms both;
  
  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
    }
    
    100% {
      -webkit-transform: translateX(51px);
              transform: translateX(51px);
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
    }
    
    100% {
      -webkit-transform: translateX(51px);
              transform: translateX(51px);
    }
  }
`;
