import React from "react";
import Filter from './Components/Filter'
import Content from './Components/Content'
import styled from "styled-components";
const Main = styled.div`
  text-align: center;
`
const Bar = styled.div`
  height: 50px;
  background-color: #3E6A8D;
`
function App() {
  return <Main>
    <Bar>Hello</Bar>
	  <Filter></Filter>
    <Content></Content>
  </Main>;
}

export default App;
