import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


const DeleteWrapper = styled.div`
  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 800px;
  height: 420px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;

  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  h2 {
    font-size: 23px;
    font-weight: 400;
  }
`;

const Content = styled.div`
  width: 750px;
  height: 300px;
  border: 1px solid #ccc;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 1px auto 1px auto;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgb(160 160 160);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: #888;  */
    background: #3c3c3c;
  }
`;

const DelButton = styled.button`
    height: 30px;
    width: 70px;
    background: #dc3545;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 15px;
    outline: none;
`
const TableRow = styled.tr`

`

const baseUrl = "http://localhost:5000/";


function GetAllBoats(setBoats, baseUrl) {
  axios.get(`${baseUrl}boats`)
  .then((res) =>{  
   setBoats(res.data)
  })
  .catch((err) => console.log('ERROR ---> ' + err));
}

export default function Delete() {
  const [boats, setBoats] = useState([]);
  

  useEffect(() => {
  GetAllBoats(setBoats, baseUrl);
  
  // eslint-disable-next-line
}, []);


const BoatsList = boats.map((e) => (

  <TableRow key={e.name}> 
    <td>{e.name}</td>
    <td>{e.price} SEK</td>
    
    {e.Sail !== 'yes' ? 
      <td>Type: Motorized</td>
      :
      <td>Type: Sail</td>
    }
    <td>{e.manifactured_year}</td>
    <td><DelButton>Delete</DelButton></td>
  </TableRow>
));
  return (
    <DeleteWrapper>
      <h2>Remove ship</h2>
      <Content>
        <table>
        <tbody>
          {BoatsList}
          </tbody>
        </table>
      </Content>
    </DeleteWrapper>
  );
}
