import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from './cardItem/CartItem'
import styled from "styled-components";
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

const baseUrl = "http://localhost:5000/";

function GetAllBoats(setBoats) {
  axios
    .get(`${baseUrl}boats`)
    .then((res) => {
      setBoats(res.data);
     
    })
    .catch((err) => console.log("ERROR ---> " + err));
}

export default function Content({ arr }) {
  const [boats, setBoats] = useState([]);
  
  useEffect(() => {
    GetAllBoats(setBoats);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (arr !== "remove") {
      setBoats(arr);
    } else {
      GetAllBoats(setBoats);
    }

    // eslint-disable-next-line
  }, [arr]);

  const BoatsList = boats.map((e) => (
    <div key={e._id}>
      <Card  boat={e}/>
    </div>
    
  ));
  return (
    <ContentWrapper>
      <div>{BoatsList}</div>
      {arr.length < 1 && boats.length < 1 ? (
        <h2>No matches Found</h2>
      ) : (
        <div></div>
      )}
    </ContentWrapper>
  );
}
