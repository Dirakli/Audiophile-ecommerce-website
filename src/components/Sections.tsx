import styled from "styled-components";
import arrow from "/assets/arrow-right.svg"
import Data from "../data.json"
import headphone from '/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speaker from '/assets/shared/desktop/image-category-thumbnail-speakers.png'
import airphone from '/assets/shared/desktop/image-category-thumbnail-earphones.png'

function Section() {
    return (
        <div>
            <Wrapper>
                <Image src={headphone} alt="headphone image" />
                <Span>HEADPHONES</Span>
                <Button>
                    <Shop>Shop</Shop>
                    <img src={arrow} alt="arrow icon" />
                </Button>
            </Wrapper>
            <Wrapper style={{marginTop: "68px"}} >
                <Image src={speaker} alt="headphone image" />
                <Span>SPEAKERS</Span>
                <Button>
                    <Shop>Shop</Shop>
                    <img src={arrow} alt="arrow icon" />
                </Button>
            </Wrapper>
            <Wrapper style={{marginTop: "68px"}}>
                <Image src={airphone} alt="headphone image" />
                <Span>airphone</Span>
                <Button>
                    <Shop>Shop</Shop>
                    <img src={arrow} alt="arrow icon" />
                </Button>
            </Wrapper>
        </div>
    )
}

const Image = styled.img`
  width: 160px;
  position: absolute;
  margin-top: -50px;
`

const Shop = styled.span`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 1px;
  opacity: 0.5;
  text-transform: uppercase;
  color: #000000;
`

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  margin-top: 17px;
  border: none;
  width: 57.32px;
`

const Span = styled.span`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 15px;
  margin-top: 88px;
  line-height: 20.49px;
  align-items: center;
  color: #000000;
`

const Wrapper = styled.div`
  width: 327px;
  height: 165px;
  border-radius: 8px;
  background-color: #F1F1F1;
  margin-top: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Section;