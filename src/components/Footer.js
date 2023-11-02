import styled from "styled-components";
import logo from "../resources/images/logo.png";

const Container = styled.main`
  background: #3a3a3a;
`;

const Section = styled.section`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Logo = styled.img`
  height: 75px;
  padding-right: 15px;
`;

const Footer = () => {
  return (
    <Container>
      <Section>
        <Logo src={logo} />
        COPYRIGHT © 2023 POWERLAND - RODZINNA STREFA ZABAWY
      </Section>
    </Container>
  );
};

export default Footer;
