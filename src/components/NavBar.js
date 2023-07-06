import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Switch, Route, Redirect, HashRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../resources/images/logo.png";

const Section = styled.section``;

const Nav = styled.nav`
  margin: auto;
  padding: 15px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledList = styled.ul`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 50px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    position: absolute;
    padding: 87px 55px;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background-color: transparent;
    color: #000000;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
  }
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 15px;
  font-weight: 700;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
`;

const Logo = styled.img`
  height: 65px;
`;

const HamburgerMenuContainer = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <HashRouter>
      <Section>
        <Nav>
          <StyledNavLink to="/">
            <Logo src={logo} />
          </StyledNavLink>
          <StyledList isOpen={isOpen}>
            <li>
              <StyledNavLink to="/o_nas">O Nas</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/grupy_szkolne">Grupy Szkolne</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/urodziny">Urodziny</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/warsztaty">Warsztaty</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/cennik">Cennik</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/regulamin">Regulamin</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/wyporzyczalnia">Wyporzyczalnia</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/galeria">Galeria</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
            </li>
          </StyledList>
          <HamburgerMenuContainer>
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={handleClick}
              width={24}
              height={20}
              strokeWidth={2}
              rotate={0}
              color={isOpen ? "#000000" : "#000000"}
              borderRadius={0}
              animationDuration={0.5}
            />
          </HamburgerMenuContainer>
        </Nav>
      </Section>
      <Switch>
        <Route path="/o_nas">s</Route>
        <Route path="/grupy_szkolne">a</Route>
        <Route path="/urodziny">u</Route>
        <Route path="/warsztaty">home</Route>
        <Route path="/cennik">home</Route>
        <Route path="/regulamin">home</Route>
        <Route path="/wyporzyczalnia">home</Route>
        <Route path="/galeria">about</Route>
        <Route path="/kontakt">contact</Route>
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};
export default NavBar;
