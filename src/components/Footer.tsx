import styled from "styled-components";
import audiophile from "/assets/header/audiophile.svg"
import facebook from "/assets/shared/desktop/icon-facebook.svg"
import twitter from "/assets/shared/desktop/icon-twitter.svg"
import instagram from "/assets/shared/desktop/icon-instagram.svg"


function Footer() {
    return (
        <Wrapper>
            <OrangeLine></OrangeLine>
            <img src={audiophile} alt="audiophile image" />
            <ul>
                <List>Home</List>
                <List style={{ marginTop: "16px" }} >HEADPHONES</List>
                <List style={{ marginTop: "16px" }} >SPEAKERS</List>
                <List style={{ marginTop: "16px" }} >EARPHONES</List>
            </ul>
            <Text>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</Text>
            <Span>Copyright 2021. All Rights Reserved</Span>
            <IconsWrapper>
                <a href="https://www.facebook.com/" target="_blank" ><img src={facebook} alt="facebook icon" /></a>
                <a href="https://twitter.com/i/flow/login" target="_blank" ><img src={twitter} alt="twitter icon" /></a>
                <a href="https://www.instagram.com/" target="_blank" ><img src={instagram} alt="instagram icon" /></a>
            </IconsWrapper>
        </Wrapper>
    )
}

const IconsWrapper = styled.div`
  width: 104px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Span = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  align-items: center;
  color: #FFFFFF;
  opacity: 0.5;
`

const Text = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  align-items: center;
  color: #FFFFFF;
  opacity: 0.5;
`

const List = styled.li`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  line-height: 25px;
  letter-spacing: 2px;
  align-items: center;
  color: #FFFFFF;
`

const OrangeLine = styled.div`
  width: 101px;
  height: 4px;
  background-color: #D87D4A;
`

const Wrapper = styled.div`
  width: 100%;
  height: 654px;
  margin-top: 12px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  background-color: #101010;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`

export default Footer;