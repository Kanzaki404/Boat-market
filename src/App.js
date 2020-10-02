import Filter from './Components/Filter'
import Content from './Components/Content'
import AddComponent from './Components/Add'
import DeleteComponent from './Components/Delete'
import styled from "styled-components";
import icon from "./assets/Vector.png"
import icon2 from "./assets/VectorB.png"
import React, { useState } from "react";
const Main = styled.div`
  text-align: center;
`
const Bar = styled.div`
  height: 50px;
  display: flex;
    justify-content: space-between;
  background-color: #144063;
  .image{
    background-image: url(${icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50px;
    width: 180px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    cursor: pointer;
  }
  button{
    margin-top: 10px;
    height: 30px;
    background: transparent;
    border: none;
    margin-right: 10px;
    color: white;
    font-size: 15px;
    outline: none;
    margin-left: 23px;
  }
  button:hover{
    text-decoration-line: underline;
 
  }
  h2{
    color: white;
    margin-top: 8px;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    margin-right: 25px;
    cursor:pointer;
    
    
    
  }

  
`
const Reflection = styled.div`
  background-image: url(${icon2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50px;
    width: 180px;
    transform: rotateX(-180deg);   
    opacity: 0.6;
`


function App() {
  const [currentPage, setCurrentPage] = useState("front") 
  const [boats, setBoats] = useState([]);
  function dataCallback(e){   
      setBoats(e)
  }


  return <Main>
    <Bar>
      <div className="image" onClick={() => setCurrentPage("front")}></div>
      <h2 onClick={() => setCurrentPage("front")}>BerrMarket $</h2>
      <div><button onClick={() => setCurrentPage("add")}>More...</button>
      </div>
      </Bar>
    <Reflection></Reflection>
    {currentPage==='front' ? 
    <div>
    <Filter dataCallback = {h=>dataCallback(h)}></Filter>
    <Content arr={boats}></Content>
    </div>
    :
    <div>
    <AddComponent></AddComponent>
    <DeleteComponent></DeleteComponent>
    </div>

    
  } 
    
	  
  </Main>;
}

export default App;
