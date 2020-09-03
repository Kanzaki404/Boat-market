import React, { useEffect, useState } from "react";
import styled from "styled-components";
import testImg from "../assets/tugboat.jpg";
import axios from "axios";

const ContentWrapper = styled.div`
  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 600px;
  margin: 50px auto 50px auto;
  padding-top: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgb(160, 160, 160);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: #888;  */
    background: #3c3c3c;
  }
`;

const Card = styled.div`
  width: 700px;
  height: 200px;
  margin: 10px auto 10px auto;
  border: solid 1px #ccc;
  border-radius: 3px;
  display: inline-flex;
`;
const One = styled.div`
  height: 100%;

  width: 35%;
  box-sizing: border-box;
  .img1 {
    background-image: url(${testImg});
    justify-self: center;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 3px 0px 0px 3px;
    
  }
  img{
    height: 100%;
        width: 245px;
    }
`;

const Two = styled.div`
  height: 100%;
  width: 65%;
  text-align: right;
  box-sizing: border-box;
  .info {
    margin-right: 10px;
    h4 {
      color: #636363;
    }
  }
`;
const baseUrl = "http://localhost:5000/";


function GetAllBoats(setBoats) {
  axios.get(`${baseUrl}boats`)
  .then((res) =>{  
   setBoats(res.data)
   console.log('if no res?', res.data)
  })
  .catch((err) => console.log('ERROR ---> ' + err));
}

export default function Content({arr}) {
  const [boats, setBoats] = useState([]);
 

  useEffect(() => {
  GetAllBoats(setBoats);
  
  // eslint-disable-next-line
}, []);

useEffect(() => {
  if(arr !== 'remove'){
    setBoats(arr)

  }else{
    GetAllBoats(setBoats)

  }
  
  // eslint-disable-next-line
}, [arr]);


console.log(Array.isArray(boats))
console.log(boats)
const BoatsList = boats.map((e) => (

   <Card key={e._id}> 
        <One>
          {e.photo ? 
          
          <img src={e.photo} alt=""/>
          :
          <div className="img1"></div>
        }
          
        </One>
        <Two>
          <div className="info">
            <h2>{e.modellname}</h2>
            <h2>{e.price} SEK</h2>
            {e.sail !== 'yes' ? 
             <h4>Type: Motorized</h4>
            :
            <h4>Type: Sail</h4>
          }
           
            <h4>Manifactured: July 1, {e.manifacturedYear}</h4>
          </div>
        </Two>
      </Card>
));
  return (
    <ContentWrapper>
      
      
      <div>
      {BoatsList}
      </div>
      {arr.length<1 && boats.length <1?
      
      <h2>No matches Found</h2>
      :
      <div></div>
      
      
      }
     
      
      
      
    </ContentWrapper>
  );
}
