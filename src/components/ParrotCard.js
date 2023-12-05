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
      <Container>
        <Fade duration={2000}>
        <RowCard>
            <ColCard lg={6}>
              <CardImg src={Parrot1} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Parrot2} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Parrot3} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Parrot4} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Parrot5} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Parrot6} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Parrot7} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Parrot8} />
            </ColCard>
          </RowCard>
        </Fade>
      </Container>
    </>
  );
};

export default ParrotCard;
