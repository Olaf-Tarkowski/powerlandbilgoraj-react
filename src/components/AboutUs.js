import styled from "styled-components";
import { Fade } from "react-reveal";
import ColorfulText from "./ColorfulText";
import DronFoto from "../resources/images/AboutUs/DronFoto.png";
import AboutUs1 from "../resources/images/AboutUs/AboutUs1.jpg";
import AboutUs2 from "../resources/images/AboutUs/AboutUs2.jpg";
import AboutUs3 from "../resources/images/AboutUs/AboutUs3.jpg";
import AboutUs4 from "../resources/images/AboutUs/AboutUs4.jpg";
import AboutUs5 from "../resources/images/AboutUs/AboutUs5.jpg";
import AboutUs6 from "../resources/images/AboutUs/AboutUs6.jpg";
import AboutUs7 from "../resources/images/AboutUs/AboutUs7.jpg";
import breakpoints from "../styles/breakpoints";

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
  padding: 10px 10px 15px;
  max-width: 1140px;
`;

const BigImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Smallmg = styled.img`
  width: 100%;
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Section = styled.section`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  @media (min-width: ${breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const ReverseSection = styled.section`
  padding: 10px 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  @media (min-width: ${breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const TextSection = styled.div`
  max-width: 600px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  min-height: 450px;
  @media (min-width: ${breakpoints.lg}) {
    max-width: 550px;
    padding: 0;
  }
`;

const ImgSection = styled.div`
  max-width: 600px;
  @media (min-width: ${breakpoints.lg}) {
    max-width: 550px;
  }
`;

const HeaderText = styled.div`
  padding: 20px;
  font-size: 28px;
  text-align: center;
`;

const Text = styled.div``;

const FontBorder = styled.div`
  padding: 20px;
  font-size: 25px;
  text-align: center;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  letter-spacing: 1px;
  word-spacing: 4px;
`;

const AboutUs = () => {
  return (
    <>
      <Fade right duration={2000}>
        <TitleText>
          <ColorfulText text="O Nas" />
        </TitleText>
      </Fade>
      <Fade left duration={2000}>
        <Line />
      </Fade>
      <Fade duration={2000}>
        <Main>
          <BigImg src={DronFoto} />
          <FontBorder>
            <ColorfulText
              text="RODZINNA STREFA ZABAWY POWERLAND POWSTAŁA Z MYŚLĄ O
            DZIECIACH/RODZICACH/OPIEKUNACH KTÓRZY CHCIELIBY SPĘDZIĆ WSPÓLNIE
            CHWILE, KTÓRYM TOWARZYSZYĆ BĘDZIE WSPANIAŁA ZABAWA JAK I AKTYWNY
            WYPOCZYNEK."
            />
          </FontBorder>
          {/* <HeaderText>
          RODZINNA STREFA ZABAWY POWERLAND POWSTAŁA Z MYŚLĄ O
          DZIECIACH/RODZICACH/OPIEKUNACH KTÓRZY CHCIELIBY SPĘDZIĆ WSPÓLNIE
          CHWILE, KTÓRYM TOWARZYSZYĆ BĘDZIE WSPANIAŁA ZABAWA JAK I AKTYWNY
          WYPOCZYNEK.
        </HeaderText> */}
          <Section>
            <TextSection>
              <Text>
                Do dyspozycji Dzieci przygotowaliśmy Salę Zabaw (czynna przez
                cały rok) w skład której wchodzą m.in konstrukacja 5 poziomowa:
              </Text>
              <Text>
                * zjeżdżalnia pontonowa,tubowa spiralna i falista 2 torowa
                <br />
                * trampoliny 4 stanowiska
                <br />
                * spider tower(kwadratowy)
                <br />
                * zjazd tyrolką
                <br />
                * armatki
                <br />
                * basen z piankami i drabiną
                <br />
                * basen z płeczkami
                <br />
                * przejście przezroczystą kładką
                <br />
                * przejścia, kładki
                <br />
                * most wiszący, worki, piramidki, korale wiszące
                <br />
                * park ninja: bocianie gniazda, worki z piankami, grzybki,
                szklana ściana
                <br />
                * dmuchany zamek <br />* ścianki wspinaczkowe z pełną asekuracją
              </Text>
            </TextSection>
            <ImgSection>
              <Smallmg src={AboutUs1} />
              <Smallmg src={AboutUs2} />
            </ImgSection>
          </Section>
          <ReverseSection>
            <ImgSection>
              <Smallmg src={AboutUs3} />
              <Smallmg src={AboutUs4} />
            </ImgSection>
            <TextSection>
              <Text>
                POMYŚLELIŚMY RÓWNIEŻ O NAJMŁODSZYCH DZIECIACH I SPECJALNIE DLA
                NICH JEST DWIE MINI ZJEŻDŻALNIE ORAZ BASEN Z PIŁECZKAMI.
              </Text>
              <Text>
                NA MIEJSCU ZNAJDUJE SIĘ RÓWNIEŻ GASTRONOMIA, KAWIARENKA.
              </Text>
              <Text>
                ORGANIZUJEMY: URODZINY DLA DZIECI, WARSZTATY DLA DZIECI,
                CHOINKI, ANDRZEJKI, MIKOŁAJKI, OGNISKA.
              </Text>
              <Text>
                ZAJMUJEMY SIĘ ANIMACJAMI NA URODZINACH, KOMUNIACH, WESELACH,
                CHOINKACH ITP.
              </Text>
              <Text>
                PROWADZIMY WYPOŻYCZALNIĘ POJAZDÓW ELEKTRYCZNYCH (HULAJNOGI,
                DESKOROLKI, SEGWAY)
              </Text>
            </TextSection>
          </ReverseSection>
          <FontBorder>
            <ColorfulText
              text="DO DYSPOZYCJI DZIECI PRZYGOTOWALIŚMY PLAC ZEWNĘTRZNY (OTWARTY
              SEZONOWO) W SKŁAD KTÓREGO WCHODZĄ NASTĘPUJĄCE ATRAKCJE:"
            />
          </FontBorder>
          {/* <HeaderText>
          DO DYSPOZYCJI DZIECI PRZYGOTOWALIŚMY PLAC ZEWNĘTRZNY (OTWARTY
          SEZONOWO) W SKŁAD KTÓREGO WCHODZĄ NASTĘPUJĄCE ATRAKCJE:
        </HeaderText> */}
          <Section>
            <TextSection>
              <Text>
                * zakręcona beczka (świat iluzji)
                <br />
                * plac Bumper Cars (żeton 5 zł)
                <br />
                * konstrukcja zabawowa Małpi Gaj
                <br />
                * euro bungee
                <br />
                * basen z łódeczkami
                <br />
                * basen z rolerami wodnymi
                <br />
                * ścianka wspinaczkowa – dmuchaniec
                <br />
                * poducha do skakania – dmuchaniec
                <br />
                * park trampolin – 10 stanowisk
                <br />
                * park linowy dwupoziomowy
                <br />
                * zjeżdżalnia pontonowa mała i duża
                <br />
                * zjeżdżalnia wodna
                <br />
                * tor przeszkód 30 m – dmuchaniec
                <br />
                * pole do minigolfa
                <br />
                * kręgielnia plenerowa
                <br />
                * strzelnica z łuku
                <br />
                * wioska indiańska – 5 orginalnych Tipi
                <br />
                * zjazd tyrolski (tylko za zgodą Opiekuna)
                <br />
                * kule do skakania – dmuchaniec
                <br />
                * bungee run
                <br />
                * mini zoo (alpaki, kozy, owce)
                <br />
                * kolorowa zagroda ,zwierzęta XXL
                <br />
                * miejsce na ognisko, grill
                <br />
                * labirynt wiklinowy
                <br />* gastronomia (zapiekanki, frytki, gofry, lody, kawa,
                herbata, napoje)
              </Text>
            </TextSection>
            <ImgSection>
              <Smallmg src={AboutUs5} />
              <Smallmg src={AboutUs6} />
            </ImgSection>
          </Section>
          <FontBorder>
            <ColorfulText
              text="Na placu organizujemy spotkania klasowe, Mikołajki, ogniska, imprezy
          okolicznościowe, urodziny itp"
            />
          </FontBorder>
          {/* <HeaderText>
          Na placu organizujemy spotkania klasowe, Mikołajki, ogniska, imprezy
          okolicznościowe, urodziny itp
        </HeaderText> */}
          <BigImg src={AboutUs7} />
          <FontBorder>
            <ColorfulText text="Serdecznie zapraszamy !" />
          </FontBorder>
          {/* <HeaderText>Serdecznie zapraszamy !</HeaderText> */}
        </Main>
      </Fade>
    </>
  );
};

export default AboutUs;
