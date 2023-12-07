import styled from "styled-components";
import { Fade } from "react-reveal";
import ColorfulText from "./ColorfulText";
import { Col, Row } from "styled-bootstrap-grid";
import Parrot1 from "../resources/images/Parrot/Parrot1.jpg";
import Parrot2 from "../resources/images/Parrot/Parrot2.jpg";
import Parrot3 from "../resources/images/Parrot/Parrot3.jpg";
import Parrot4 from "../resources/images/Parrot/Parrot4.jpg";
import Parrot5 from "../resources/images/Parrot/Parrot5.jpg";
import Parrot6 from "../resources/images/Parrot/Parrot6.jpg";
import Parrot7 from "../resources/images/Parrot/Parrot7.jpg";
import Parrot8 from "../resources/images/Parrot/Parrot8.jpg";
import Regulations from "../resources/images/Parrot/Regulations.jpg";
import { useState } from "react";

const TitleText = styled.div`
  margin: auto;
  padding: 0 20px;
  font-size: 40px;
  max-width: 1140px;
  text-transform: uppercase;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  letter-spacing: 1px;
  word-spacing: 4px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 15px;
  background: #cc2e72;
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

const FontBorder = styled.div`
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  letter-spacing: 1px;
  word-spacing: 4px;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const OpeningHoursCard = styled.img`
  height: auto;
  max-width: 1140px;
  width: 100%;
`;

const Container = styled.div`
  margin: auto;
  padding: 0 0 15px;
  max-width: 1140px;
`;

const RowCard = styled(Row)`
  margin: 0 10px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;

const ColCard = styled(Col)`
  padding: 10px;
`;

const ParrotCard = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Fade right duration={2000}>
        <TitleText>
          <ColorfulText text="Warsztaty" />
        </TitleText>
      </Fade>
      <Fade left duration={2000}>
        <Line />
      </Fade>

      <OpeningHoursSection>
        <FontBorder>
          <ColorfulText text="JUŻ OTWARTA - ZAPRASZAMY!" />
        </FontBorder>
        <Fade collapse when={visible}>
          <StyledCard>
            <OpeningHoursCard src={Regulations} />
          </StyledCard>
        </Fade>
        <Button onClick={() => setVisible(!visible)}>
          {visible === true ? "SCHOWAJ" : "POKAŻ"} REGULAMIN
        </Button>
      </OpeningHoursSection>

      <Container>
        <Fade duration={2000}>
          <RowCard>
            <ColCard md={6}>
              <CardImg src={Parrot1} />
            </ColCard>
            <ColCard md={6}>
              <CardImg src={Parrot2} />
            </ColCard>
            <ColCard md={6}>
              <CardImg src={Parrot3} />
            </ColCard>
            <ColCard md={6}>
              <CardImg src={Parrot4} />
            </ColCard>
            <ColCard md={6}>
              <CardImg src={Parrot5} />
            </ColCard>
            <ColCard md={6}>
              <CardImg src={Parrot6} />
            </ColCard>
            <ColCard md={6}>
              <CardImg src={Parrot7} />
            </ColCard>
            <ColCard md={6}>
              <CardImg src={Parrot8} />
            </ColCard>
          </RowCard>
        </Fade>
      </Container>
    </>
  );
};

export default ParrotCard;
