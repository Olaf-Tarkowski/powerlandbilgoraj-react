import styled from "styled-components";
import { Fade } from "react-reveal";
import ColorfulText from "./ColorfulText";
import { Col, Row } from "styled-bootstrap-grid";
import Workshop1 from "../resources/images/Workshop/Workshop1.jpg"
import Workshop2 from "../resources/images/Workshop/Workshop2.png"
import Workshop3 from "../resources/images/Workshop/Workshop3.jpg"
import Workshop4 from "../resources/images/Workshop/Workshop4.jpg"
import Workshop5 from "../resources/images/Workshop/Workshop5.jpg"
import Workshop6 from "../resources/images/Workshop/Workshop6.png"
import Workshop7 from "../resources/images/Workshop/Workshop7.jpg"


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

const Workshop = () => {
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
              <CardImg src={Workshop1} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Workshop2} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Workshop3} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Workshop4} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Workshop5} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={Workshop6} />
            </ColCard>
            <ColCard offset={3} lg={6}>
              <CardImg src={Workshop7} />
            </ColCard>
          </RowCard>
        </Fade>
      </Container>
    </>
  );
};

export default Workshop;
