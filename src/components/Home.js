import styled from "styled-components";
import powerland_above from "../resources/images/powerland_above.jpeg";
import logo from "../resources/images/logo.png";

const Main = styled.main``;

const PictureSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.img`
  max-width: 100%;
  background-position: center;
`;

const Logo = styled.img`
  position: absolute;
  margin-bottom: 50px;
  max-height: 200px;
  transition: 0.9s;
  &:hover {
    transform: scale(1.25);
  }
`;

const Home = () => {
  return (
    <Main>
      <PictureSection>
        <Picture src={powerland_above}></Picture>
        <Logo src={logo} />
      </PictureSection>
    </Main>
  );
};

export default Home;
