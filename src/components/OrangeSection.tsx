import styled from "styled-components";
import Data from "../data.json"
import speaker from '/assets/home/desktop/image-speaker-zx9.png'
import patternCircles from '/assets/home/desktop/pattern-circles.svg'

function OrangeSection() {
    return (
        <Wrapper>
            <Circles src={patternCircles} alt="white circles" />
            <Image src={speaker} alt="speaker image" />
            <Heading>{Data[4].others[0].name}</Heading>
            <Paragraph>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Paragraph>
            <Button>See Product</Button>
        </Wrapper>
    )
}

const Circles = styled.img`
  position: absolute;
  width: 558px;
  margin-top: -120px;
  z-index: 10;
`

const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: #000000;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  border: none;
  outline: none;
  font-size: 13px;
  margin-top: 24px;
  line-height: 17.76px;
  letter-spacing: 1px;
  align-items: center;
  color: #FFFFFF;
`

const Paragraph = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  margin-top: 24px;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.75;
  width: 280px;
  text-align: center;
  align-items: center;
  color: #FFFFFF;
`

const Heading = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-transform: uppercase;
  width: min-content;
  text-align: center;
  margin-top: 296px;
  letter-spacing: 1.29px;
  color: #FFFFFF;
`

const Image = styled.img`
  position: absolute;
  margin-top: 60px;
  width: 172px;
  z-index: 1;
`

const Wrapper = styled.div`
  width: 327px;
  height: 600px;
  border-radius: 8px;
  margin-top: 120px;
  background-color: #D87D4A;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default OrangeSection;