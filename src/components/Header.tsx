import styled from "styled-components";
import audiophile from "/assets/header/audiophile.svg"
import cart from "/assets/header/cart.svg"
import burger from "/assets/header/burger.svg"


function Header() {
    return (
        <HeaderWrapper>
            <img src={burger} alt="burger icon" />
            <img src={audiophile} alt="audiophile image" />
            <img src={cart} alt="cart machine icon" />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 88px;
  background-color: #191919;
  display: flex;
  border: 1px solid #FFFFFF;
  justify-content: space-around;
  align-items: center;
`

export default Header;