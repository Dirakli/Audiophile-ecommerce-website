import styled from "styled-components";
import Headphone from "/assets/home/mobile/image-header.jpg"

function NewProduct() {
    return (
        <Wrapper image={Headphone} >
            <Span>NEW PRODUCT</Span>
            <Heading>XX99 Mark II HeadphoneS</Heading>
            <Paragraph>ExParagrapherience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Paragraph>
            <Button>See Product</Button>
        </Wrapper>
    )
}

const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: #D87D4A;
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

const Paragraph = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 15px;
  margin-top: 24px;
  line-height: 25px;
  width: 328px;
  opacity: 0.75;
  align-items: center;
  color: #FFFFFF;
`

const Heading = styled.span`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 36px;
  margin-top: 16px;
  line-height: 40px;
  letter-spacing: 1.29px;
  align-items: center;
  color: #FFFFFF;
`

const Span = styled.span`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.12px;
  letter-spacing: 10px;
  align-items: center;
  color: #FFFFFF;
`

const Wrapper = styled.div<any>`
  height: 510px;
  width: 100%;
  display: flex;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export default NewProduct;