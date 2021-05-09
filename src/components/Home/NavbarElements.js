import MenuIcon from '@material-ui/icons/Menu';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #282c34;
  height: 85px;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #282c34;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-right: 20px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
export const Bars = styled(MenuIcon)`
  display: none;
  color: ##282c34;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  background: #282c34;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  &:hover {
      font-size: 10;
      transition: 500ms awesome;
      color: #ffb800;
      text-decoration: underline;
      font-size: 35px;
    }
`;
