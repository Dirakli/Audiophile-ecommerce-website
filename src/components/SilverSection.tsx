import styled from "styled-components";
import speaker from '/assets/home/mobile/image-speaker-zx7.jpg'


function SilverSection() {
    return (
        <Wrapper>
            <Image src={speaker} alt="speaker image" />
            <Heading>ZX7 SPEAKER</Heading>
            <Button>See Product</Button>
        </Wrapper>
    )
}

const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: transparent;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 17.76px;
  letter-spacing: 1px;
  align-items: center;
  color: #000000;
`

const Heading = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-transform: uppercase;
  width: min-content;
  text-align: center;
  letter-spacing: 1.29px;
  color: #FFFFFF;
`

const Image = styled.img`
  position: absolute;
  width: 172px;
  z-index: 1;
`

const Wrapper = styled.div`
  width: 327px;
  height: 320px;
  border-radius: 8px;
  margin-top: 24px;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default SilverSection;