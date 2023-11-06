import styled from "styled-components";
import powerland_above from "../resources/images/powerland_above.jpeg";
import logo from "../resources/images/logo.png";
import openingHours from "../resources/images/opening_hours.jpg";
import { useState } from "react";
import Fade from "react-reveal/Fade";

const Main = styled.main``;

const PictureSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpeningHours = styled.section`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  font-family: "Atma", cursive;
  padding: 10px 20px;
  letter-spacing: 1.5px;
  background-color: #cc2e72;
  border-color: #02010100;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  transition: 0.9s;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OpeningHoursCard = styled.img`
  height: auto;
  max-width: 50%;
`;

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Main>
      <PictureSection>
        <Picture src={powerland_above}></Picture>
        <Logo src={logo} />
      </PictureSection>
      <OpeningHours>
        Zapraszamy codziennie !
        <Fade collapse when={visible}>
          <StyledCard>
            <OpeningHoursCard src={openingHours} />
          </StyledCard>
        </Fade>
        <Button onClick={() => setVisible(!visible)}>
          {visible == true ? "SCHOWAJ" : "POKAŻ"} GODZINY OTWARCIA
        </Button>
      </OpeningHours>
    </Main>
  );
};

export default Home;
