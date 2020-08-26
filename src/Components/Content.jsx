import React from "react";
import styled from "styled-components";
import testImg from "../assets/tugboat.jpg";
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
`;

const Two = styled.div`
  height: 100%;
  
  width: 65%;
  text-align: right;

  box-sizing: border-box;
  .info{
      margin-right: 10px;
      h4{
          color: #636363;
      }
  }
`;
export default function Content() {
  return (
    <ContentWrapper>
      <Card>
        <One>
          <div className="img1"></div>
        </One>
        <Two>
            <div className="info">
            <h2>Bismark</h2>
            <h2>200 000 SEK</h2>
            <h4>Type: Motorized</h4>
            <h4>Manifactured: July 1, 1936</h4>
            
            </div>
            
        </Two>
      </Card>
      <Card>
        <One>
          <div className="img1"></div>
        </One>
        <Two>
            <div className="info">
            <h2>Bismark</h2>
            <h2>200 000 SEK</h2>
            <h4>Type: Motorized</h4>
            <h4>Manifactured: July 1, 1936</h4>
            
            </div>
            
        </Two>
      </Card>
      <Card>
        <One>
          <div className="img1"></div>
        </One>
        <Two>
            <div className="info">
            <h2>Bismark</h2>
            <h2>200 000 SEK</h2>
            <h4>Type: Motorized</h4>
            <h4>Manifactured: July 1, 1936</h4>
            
            </div>
            
        </Two>
      </Card>
      <Card>
        <One>
          <div className="img1"></div>
        </One>
        <Two>
            <div className="info">
            <h2>Bismark</h2>
            <h2>200 000 SEK</h2>
            <h4>Type: Motorized</h4>
            <h4>Manifactured: July 1, 1936</h4>
            
            </div>
            
        </Two>
      </Card>
      <Card>
        <One>
          <div className="img1"></div>
        </One>
        <Two>
            <div className="info">
            <h2>Bismark</h2>
            <h2>200 000 SEK</h2>
            <h4>Type: Motorized</h4>
            <h4>Manifactured: July 1, 1936</h4>
            
            </div>
            
        </Two>
      </Card>
    </ContentWrapper>
  );
}
