import { Switch, Route, Redirect, HashRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../resources/images/logo.png";

const Section = styled.section``;

const Nav = styled.nav`
  margin: auto;
  padding: 15px 35px;
  display: flex;
  align-items: center;
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

const NavBar = () => {
  return (
    <HashRouter>
      <Section>
        <Nav>
          <StyledNavLink to="/">
            <Logo src={logo} />
          </StyledNavLink>
          <StyledList>
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
