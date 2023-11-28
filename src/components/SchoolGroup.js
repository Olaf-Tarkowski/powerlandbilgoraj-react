import { Col, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import CardImg1 from "../resources/images/SchoolGroupeImages/SchoolGroupCard1.jpg";
import CardImg2 from "../resources/images/SchoolGroupeImages/SchoolGroupCard2.jpg";
import CardImg3 from "../resources/images/SchoolGroupeImages/SchoolGroupCard3.jpg";
import CardImg4 from "../resources/images/SchoolGroupeImages/SchoolGroupCard4.jpg";
import CardImg5 from "../resources/images/SchoolGroupeImages/SchoolGroupCard5.jpg";
import CardImg6 from "../resources/images/SchoolGroupeImages/SchoolGroupCard6.jpg";
import { Fade } from "react-reveal";
import ColorfulText from "./ColorfulText";

const TitleText = styled.div`
  margin: auto;
  padding: 0 30px;
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
  margin: 0 15px;
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
  padding: 15px;
`;

const SchoolGroup = () => {
  return (
    <>
      <Fade right duration={2000}>
        <TitleText>
          <ColorfulText text="Grupy Szkolne" />
        </TitleText>
      </Fade>
      <Fade left duration={2000}>
        <Line />
      </Fade>
      <Container>
        <Fade duration={2000}>
          <RowCard>
            <ColCard lg={6}>
              <CardImg src={CardImg1} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={CardImg2} />
            </ColCard>
          </RowCard>
          <RowCard>
            <ColCard lg={6}>
              <CardImg src={CardImg3} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={CardImg4} />
            </ColCard>
          </RowCard>
          <RowCard>
            <ColCard lg={6}>
              <CardImg src={CardImg5} />
            </ColCard>
            <ColCard lg={6}>
              <CardImg src={CardImg6} />
            </ColCard>
          </RowCard>
        </Fade>
      </Container>
    </>
  );
};

export default SchoolGroup;
