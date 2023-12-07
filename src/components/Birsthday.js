import styled from "styled-components";
import birthday1 from "../resources/images/Birthday/birthday1.png";
import birthday2 from "../resources/images/Birthday/birthday2.png";
import birthday3 from "../resources/images/Birthday/birthday3.png";
import birthday4 from "../resources/images/Birthday/birthday4.jpg";
import birthday5 from "../resources/images/Birthday/birthday5.jpg";
import birthday6 from "../resources/images/Birthday/birthday6.jpg";
import { Col, Row } from "styled-bootstrap-grid";
import Fade from "react-reveal/Fade";
import ColorfulText from "./ColorfulText";

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

const Main = styled.main`
  margin: auto;
  padding: 0 0 15px;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowCard = styled(Row)`
  margin: 0 10px;
`;

const ColCard = styled(Col)`
  padding: 10px;
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

const Info = styled.div`
  margin: 20px;
  text-align: center;
`;

const TextBox = styled.div`
  margin: 50px 0;
`;

const Title = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 20px;
`;
const InfoText = styled.div`
  word-spacing: 4px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
`;

const Birthday = () => {
  return (
    <>
      <Fade right duration={2000}>
        <TitleText>
          <ColorfulText text="birthday" />
        </TitleText>
      </Fade>
      <Fade left duration={2000}>
        <Line />
      </Fade>
      <Main>
        <Fade duration={2000}>
          <RowCard>
            <ColCard md={6}>
              <CardImg src={birthday1} />
            </ColCard>
            <ColCard md={6}>
              <CardImg src={birthday3} />
            </ColCard>
          </RowCard>
          <Info>
            ZNAK TOWAROWY SLIME® JEST ZAREJESTROWANY NA RZECZ VIACOM
            INTERNATIONAL INC. ZAREJESTROWANY ZNAK TOWAROWY.
          </Info>
          <RowCard>
            <ColCard md={12}>
              <CardImg src={birthday2} />
            </ColCard>
          </RowCard>
          <RowCard>
            <ColCard md={12}>
              <TextBox>
                <Title>
                  ORGANIZACJA URODZIN W PARKU ZEWNĘTRZNY POWERLAND BIŁGORAJ
                </Title>
                <InfoText>
                  150 zł – WYNAJĘCIE MIEJSCA
                  <br />
                  40 zł / DZIECKO / 3 h POBYTU W PARKU
                  <br />
                  25 zł / RODZIC / OPIEKUN
                </InfoText>
              </TextBox>
              <TextBox>
                <Title>
                  UWAGA !
                  <br />
                  INFORMACJA !
                </Title>
                <InfoText>
                  Informujemy, że rodzice / opiekunowie przebywający z dziećmi
                  na organizowanym przyjęciu w Powerland,
                  <br />
                  mogą korzystać z atrakcji (samodzielnie lub wspólnie z
                  dzieckiem) tylko po uiszczeniu opłaty zgodnie z cennikiem
                  powerland.
                </InfoText>
                <InfoText>
                  poczęstunek dla dzieci w zakresie Rodzica/opiekuna
                </InfoText>
                <InfoText>
                  kawa/herbata, pizza lub inne produkty są zamawiane w
                  gastronomii lub lokalu i na bieżąco opłacane
                </InfoText>
              </TextBox>
              <TextBox>
                <InfoText>
                  Rodzice / opiekunowie, którzy nie dokonali opłaty zgodnie z
                  cennikiem Powerland otrzymują opaskę,
                  <br />
                  która upoważnia ich jedynie do przebywania razem z dzieckiem
                  podczas zorganizowanego przyjęcia
                  <br />
                  na terenie Poweland i uniemozliwia wejście na atrakcje.
                </InfoText>
                <InfoText>
                  Informujemy również, iż wiek dziecka musi być odpowiedni do
                  korzystania z danej atrakcji.
                </InfoText>
                <InfoText>
                  UWAGA ! Nie na wszystkich atrakcjach może uczestniczyć dziecko
                  bez rodzica / opiekuna.
                </InfoText>
                <InfoText>
                  każda osoba przebywająca na parku powinna posiadać opaskę,
                  osoby bez opasek będą wypraszane z placówki
                </InfoText>
                <InfoText>
                  Za uczestników imprezy urodzinowej odpowiada organizator
                  imprezy.
                </InfoText>
              </TextBox>
            </ColCard>
          </RowCard>
          <RowCard>
            <ColCard md={6}>
              <CardImg src={birthday6} />
            </ColCard>
            <ColCard md={6}>
              <CardImg src={birthday4} />
            </ColCard>
          </RowCard>
          <RowCard>
            <ColCard md={12}>
              <CardImg src={birthday5} />
            </ColCard>
          </RowCard>
        </Fade>
      </Main>
    </>
  );
};

export default Birthday;
