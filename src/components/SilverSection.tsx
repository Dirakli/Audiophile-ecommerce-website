import styled from "styled-components";
import speaker from '/assets/home/mobile/image-speaker-zx7.jpg'
import earphone from '/assets/home/mobile/image-earphones-yx1.jpg'

interface StyledDivOps {
  image: string;
}

function SilverSection() {
  return (
    <MainWrapper>
      <Wrapper image={speaker} >
        <Heading>ZX7 SPEAKER</Heading>
        <Button>See Product</Button>
      </Wrapper>

      <EarphoneDiv>
      <Image src={earphone} alt="earphone image" />
      <WrapperWithoutImage >
        <Heading>YX1 EARPHONES</Heading>
        <Button>See Product</Button>
      </WrapperWithoutImage>
      </EarphoneDiv>
    </MainWrapper>

  )
}

const WrapperWithoutImage = styled.div`
  width: 327px;
  height: 200px;
  border-radius: 8px;
  margin-top: 24px;
  padding-left: 25.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F1F1F1;
  justify-content: center;
`

const EarphoneDiv = styled.div`
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 327px;
  border-radius: 8px;
  height: 200px;
`

const MainWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  width: 160px;
  height: 48px;
  border: 1px solid #000000;
  background-color: transparent;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  margin-top: 32px;
  font-size: 13px;
  line-height: 17.76px;
  letter-spacing: 1px;
  align-items: center;
  color: #000000;
`

const Heading = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 38.25px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: #000000;
`

const Wrapper = styled.div<StyledDivOps>`
  width: 327px;
  height: 320px;
  border-radius: 8px;
  padding-left: 25.5px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default SilverSection;