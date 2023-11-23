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
  padding: 0 0 15px;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowCard = styled(Row)`
  margin: 0 15px;
`;

const ColCard = styled(Col)`
  padding: 15px;
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
    <Main>
      <RowCard>
        <ColCard lg={6}>
          <CardImg src={urodziny1} />
        </ColCard>
        <ColCard lg={6}>
          <CardImg src={urodziny3} />
        </ColCard>
      </RowCard>
      <Info>
        ZNAK TOWAROWY SLIME® JEST ZAREJESTROWANY NA RZECZ VIACOM INTERNATIONAL
        INC. ZAREJESTROWANY ZNAK TOWAROWY.
      </Info>
      <RowCard>
        <ColCard lg={12}>
          <CardImg src={urodziny2} />
        </ColCard>
      </RowCard>
      <RowCard>
        <ColCard lg={12}>
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
              Informujemy, że rodzice / opiekunowie przebywający z dziećmi na
              organizowanym przyjęciu w Powerland,
              <br />
              mogą korzystać z atrakcji (samodzielnie lub wspólnie z dzieckiem)
              tylko po uiszczeniu opłaty zgodnie z cennikiem powerland.
            </InfoText>
            <InfoText>
              poczęstunek dla dzieci w zakresie Rodzica/opiekuna
            </InfoText>
            <InfoText>
              kawa/herbata, pizza lub inne produkty są zamawiane w gastronomii
              lub lokalu i na bieżąco opłacane
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
              UWAGA ! Nie na wszystkich atrakcjach może uczestniczyć dziecko bez
              rodzica / opiekuna.
            </InfoText>
            <InfoText>
              każda osoba przebywająca na parku powinna posiadać opaskę, osoby
              bez opasek będą wypraszane z placówki
            </InfoText>
            <InfoText>
              Za uczestników imprezy urodzinowej odpowiada organizator imprezy.
            </InfoText>
          </TextBox>
        </ColCard>
      </RowCard>
      <RowCard>
        <ColCard lg={6}>
          <CardImg src={urodziny6} />
        </ColCard>
        <ColCard lg={6}>
          <CardImg src={urodziny4} />
        </ColCard>
      </RowCard>
      <RowCard>
        <ColCard lg={12}>
          <CardImg src={urodziny5} />
        </ColCard>
      </RowCard>
    </Main>
  );
};

export default Birthday;
