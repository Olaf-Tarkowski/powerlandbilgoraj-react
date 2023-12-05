import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Switch, Route, Redirect, HashRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../resources/images/logo.png";
import Home from "./Home";
import Birthday from "./Birsthday";
import Gallery from "./Gallery";
import Rent from "./Rent";
import Workshop from "./Workshop";
import SchoolGroup from "./SchoolGroup";
import ColorfulText from "./ColorfulText";
import AboutUs from "./AboutUs";
import ParrotCard from "./ParrotCard";

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
  gap: 30px;

  @media (max-width: 1400px) {
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
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
`;

const Text = styled.div`
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  letter-spacing: 1px;
  word-spacing: 4px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.25);
  }
`;

const Logo = styled.img`
  height: 65px;
  transition: 0.9s;
  &:hover {
    transform: scale(1.25);
  }
`;

const HamburgerMenuContainer = styled.div`
  @media (min-width: 1400px) {
    display: none;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HashRouter>
      <Section>
        <Nav>
          <StyledNavLink to="/">
            <Logo src={logo} />
          </StyledNavLink>
          <StyledList isOpen={isOpen}>
            <li>
              <StyledNavLink to="/o_nas">
                <Text>
                  <ColorfulText text="O Nas" />
                </Text>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/grupy_szkolne">
                <Text>
                  <ColorfulText text="Grupy Szkolne" />
                </Text>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/urodziny">
                <Text>
                  <ColorfulText text="Urodziny" />
                </Text>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/warsztaty">
                <Text>
                  <ColorfulText text="Warsztaty" />
                </Text>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/papugarnia">
                <Text>
                  <ColorfulText text="Papugarnia" />
                </Text>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/cennik">
                <Text>
                  <ColorfulText text="Cennik" />
                </Text>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/regulamin">
                <Text>
                  <ColorfulText text="Regulamin" />
                </Text>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/wyporzyczalnia">
                <Text>
                  <ColorfulText text="Wyporzyczalnia" />
                </Text>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/galeria">
                <Text>
                  <ColorfulText text="Galeria" />
                </Text>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/kontakt">
                <Text>
                  <ColorfulText text="Kontakt" />
                </Text>
              </StyledNavLink>
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
        <Route path="/o_nas">
          <AboutUs />
        </Route>
        <Route path="/grupy_szkolne">
          <SchoolGroup />
        </Route>
        <Route path="/urodziny">
          <Birthday />
        </Route>
        <Route path="/warsztaty">
          <Workshop />
        </Route>
        <Route path="/papugarnia">
          <ParrotCard />
        </Route>
        <Route path="/cennik">home</Route>
        <Route path="/regulamin">home</Route>
        <Route path="/wyporzyczalnia">
          <Rent />
        </Route>
        <Route path="/galeria">
          <Gallery />
        </Route>
        <Route path="/kontakt">contact</Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};
export default NavBar;
