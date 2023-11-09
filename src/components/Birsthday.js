import styled from "styled-components";
import urodziny1 from "../resources/images/urodziny1.png";
import urodziny2 from "../resources/images/urodziny2.png";
import urodziny3 from "../resources/images/urodziny3.png";
import urodziny4 from "../resources/images/urodziny4.jpg";
import urodziny5 from "../resources/images/urodziny5.jpg";
import urodziny6 from "../resources/images/urodziny6.jpg";
import { Col, Row } from "styled-bootstrap-grid";

const Main = styled.main`
  margin: auto;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardRow = styled(Col)`
  padding: 15px 15px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const Info = styled.div``;

const OneRowImg = styled.img``;

const Birthday = () => {
  return (
    <Main>
      <Row>
        <CardRow lg={6}>
          <CardImg src={urodziny1} />
        </CardRow>
        <CardRow lg={6}>
          <CardImg src={urodziny3} />
        </CardRow>
      </Row>
      <Info>
        ZNAK TOWAROWY SLIME® JEST ZAREJESTROWANY NA RZECZ VIACOM INTERNATIONAL
        INC. ZAREJESTROWANY ZNAK TOWAROWY.
      </Info>
      <Row>
        <CardRow lg={12}>
          <CardImg src={urodziny2} />
        </CardRow>
      </Row>
      <Row>
        <CardRow lg={6}>
          <CardImg src={urodziny6} />
        </CardRow>
        <CardRow lg={6}>
          <CardImg src={urodziny4} />
        </CardRow>
      </Row>
      <Row>
        <CardRow lg={12}>
          <CardImg src={urodziny5} />
        </CardRow>
      </Row>
    </Main>
  );
};

export default Birthday;
