import styled from "styled-components";
import powerland_above from "../resources/images/powerland_above.jpeg";
import logo from "../resources/images/logo.png";
import openingHours from "../resources/images/opening_hours.jpg";
import urodziny from "../resources/images/urodziny.jpg";
import wnetrze from "../resources/images/wnetrze.jpg";
import hulajnogi from "../resources/images/hulajnogi.jpg";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import breakpoints from "../styles/breakpoints";

const Main = styled.main`
  text-align: center;
`;

const PictureSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpeningHoursSection = styled.section`
  padding: 20px 20px;
  color: #cc2e72;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BirthdaySection = styled.section`
  padding: 20px 20px;
  background-color: rgba(241, 243, 245, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WorkshopsSection = styled.section`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RentalSection = styled.section`
  padding: 20px 20px;
  background-color: rgba(241, 243, 245, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.img`
  object-fit: cover;
  height: 600px;
  width: 100%;
  background-position: center;
`;

const Logo = styled.img`
  position: absolute;
  max-height: 150px;
  transition: 0.9s;
  &:hover {
    transform: scale(1.25);
  }
  @media (min-width: ${breakpoints.lg}) {
    max-height: 200px;
  }
`;

const Button = styled.button`
  font-family: "Atma", cursive;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 25px;
  letter-spacing: 1.5px;
  color: #fff;
  background-color: #cc2e72;
  border-color: #02010100;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  transition: 0.8s;
  &:hover {
    transform: scale(1.15);
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OpeningHoursCard = styled.img`
  height: auto;
  max-width: 1140px;
  width: 100%;
`;

const InfoCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: center;
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

const InfoPart = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: #cc2e72;
  font-size: 35px;
  font-weight: 400;
`;

const Text = styled.div`
  padding: 20px 0;
`;

const SectionImg = styled.img`
  max-width: 480px;
  width: 100%;
  border-radius: 20px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
`;

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Main>
      <Fade duration={2000}>
        <PictureSection>
          <Picture src={powerland_above}></Picture>
          <Logo src={logo} />
        </PictureSection>
        <OpeningHoursSection>
          Zapraszamy codziennie !
          <Fade collapse when={visible}>
            <StyledCard>
              <OpeningHoursCard src={openingHours} />
            </StyledCard>
          </Fade>
          <Button onClick={() => setVisible(!visible)}>
            {visible === true ? "SCHOWAJ" : "POKAŻ"} GODZINY OTWARCIA
          </Button>
        </OpeningHoursSection>
        <BirthdaySection>
          <InfoCard>
            <InfoPart>
              <Title>URODZINY</Title>
              <Text>
                ZORGANIZUJ SWOJEMU DZIECKU NIEZAPOMNIANE URODZINY W POWERLAND !
              </Text>
              <Button>
                <Link to="/urodziny">Więcej Informacji</Link>
              </Button>
            </InfoPart>
            <SectionImg src={urodziny} />
          </InfoCard>
        </BirthdaySection>
        <WorkshopsSection>
          <InfoCard>
            <SectionImg src={wnetrze} />
            <InfoPart>
              <Title>WARSZTATY</Title>
              <Text>
                ZAPISZ SWOJEGO MALUCHA NA TWÓRCZE WARSZTATY, NA KTÓRYCH NAUCZY
                SIĘ ROBIĆ WŁASNORĘCZNIE STWORZONĄ PIZZĘ, PRZERÓŻNE DEKORACJE
                ORAZ SLIME
              </Text>
              <Button>
                <Link to="/warsztaty">Więcej Informacji</Link>
              </Button>
            </InfoPart>
          </InfoCard>
        </WorkshopsSection>
        <RentalSection>
          <InfoCard>
            <InfoPart>
              <Title>WYPOŻYCZALNIA HULAJNÓG</Title>
              <Text>WYPOŻYCZ HULAJNOGĘ I UDAJ SIĘ NA WYCIECZKĘ !</Text>
              <Button>
                <Link to="/wyporzyczalnia">Więcej Informacji</Link>
              </Button>
            </InfoPart>
            <SectionImg src={hulajnogi} />
          </InfoCard>
        </RentalSection>
      </Fade>
    </Main>
  );
};

export default Home;
