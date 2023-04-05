import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import NewProduct from './components/NewProduct'
import { createGlobalStyle } from 'styled-components'
import Section from './components/Sections'
import Data from "./data.json"
import OrangeSection from './components/OrangeSection'
import SilverSection from './components/SilverSection'

console.log(Data)

function App() {

  return (
    <MainWrapper>
      <GlobalStyles />
      <Header />
      <NewProduct />
      <Section />
      <OrangeSection/>
      <SilverSection/>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  width: 375px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`
const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

* {
  box-sizing: border-box;
}
textarea {
  resize: none;
}
button {
  cursor: pointer;
}
`
export default App
