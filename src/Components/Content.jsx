import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 600px;
  margin: 50px auto 50px auto;
  padding-top: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
 
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
    border: solid 1px red;
  width: 35%;
 
  
  box-sizing: border-box;
`;

const Two = styled.div`
  height: 100%;
  border: solid 1px red;
  width: 65%;
 
  box-sizing: border-box;
`;
export default function Content() {
  return (
    <ContentWrapper>
      <Card>
        <One></One>
        <Two></Two>
      </Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </ContentWrapper>
  );
}
