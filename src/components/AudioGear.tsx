import styled from "styled-components"
import Profile from "/assets/shared/mobile/image-best-gear.jpg"


function AudioGear() {
    return (
        <Wrapper>
            <Img src={Profile} alt="profile photo" />
            <Heading>Bringing you the <Span>best</Span> audio gear</Heading>
            <Paragraph>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</Paragraph>
        </Wrapper>
    )
}

const Paragraph = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 15px;
  margin-top: 32px;
  line-height: 25px;
  color: #000000;
  opacity: 0.5;
`

const Span = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 28px;
  display: contents;
  line-height: 38.25px;
  letter-spacing: 1px;
  color: #D87D4A;  
`

const Heading = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  margin-top: 40px;
  text-transform: uppercase;
  font-size: 28px;
  line-height: 38.25px;
  letter-spacing: 1px;
  color: #000000;  
`

const Img = styled.img`
  width: 327px;
  height: 300px;
`

const Wrapper = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export default AudioGear;