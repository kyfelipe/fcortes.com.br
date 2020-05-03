import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const MenuWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const MenuButton = styled.div`
	--x: -50%;
	--y: 0;
	--z: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //background: var(--highlight);
  background: linear-gradient(to right, var(--highlight), var(--link));
  padding: 10px 20px;
  border-radius: 28px;
  box-shadow: 0 2px 40px -10px var(--black);
  color: var(--white);
  font-size: 1rem;
  white-space: nowrap;
  bottom: 20px;
  left: 50%;
  transform: translate3d(var(--x), var(--y), var(--z));
  
  &[hidden] {
		--y: 200%;
	}
`;

export const MenuBody = styled.section`
	--x: 0;
	--y: 0;
	--z: 0;
	display: block;
	position: absolute;
	width: 100%;
	color: var(--texts);
	background: var(--background);
	padding-bottom: 5px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	box-shadow: 0px -9px 50px -30px var(--navbarShadow);
	bottom: 0;
	z-index: 105;
	transform: translate3d(var(--x), var(--y), var(--z));
	transition: 0.2s cubic-bezier(0.33, 1, 0.53, 1);
	
	&[hidden] {
		--y: 150%;
	}
	
	> *:not(:last-child) {
		border-bottom: 1px solid #f6f6f6; // 2px
	}
`;

export const MenuHeader = styled.div`
  display: flex;
	justify-content: space-between;
	padding: 15px 20px;
`;

export const MenuTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  vertical-align: center;
  white-space: nowrap;
`;

export const MenuCloseButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  color: var(--texts);
`;

export const MenuLinksWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px 15px;
	font-weight: bold;
	overflow-x: auto;
`;

export const MenuLink = styled(Link)`
  //flex: 1 1 1px;
  padding: 10px 8px;
  color: var(--texts);
  text-decoration: none;
  white-space: nowrap;
`;

export const MenuFooterWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
  padding: 10px 15px;
`;

export const MenuContactWrapper = styled.div`
	display: flex;
`;

export const MenuFunctionsWrapper = styled.div`
	display: flex;
`;

export const Icon = styled.div`
  //flex: 1 1 30%;
  width: 32px;
  height: 32px;
  margin: 0 5px;
  //background: #f6f6f6;
  color: var(--texts);
  text-align: center;
  
  a:visited {
    text-decoration: inherit;
    color: inherit;
  }
  
  a:link {
    text-decoration: inherit;
    color: inherit;
  }
`;

export const MenuOverlay = styled.div`
  width: 100%;
	height: 100%;
	background: rgba(#000, 0.1);
	position: absolute;
	z-index: 100;
`;
