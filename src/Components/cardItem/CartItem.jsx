import React, {useState,useEffect} from "react";
import styled from "styled-components";
import testImg from "../../assets/tugboat.jpg";
import axios from "axios";

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
  img {
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
function getImage(photo,setImageFromServer){
  axios
  .get(`${baseUrl}assets`,{ params: photo })
  .then((res) => {
    setImageFromServer(res.data)
  })
  .catch((err) => console.log("ERROR ---> " + err));
}

export default function CartItem({boat}) {
  
  const [imageFromServer, setImageFromServer] = useState("");
  useEffect(() => {
    getImage(boat.photo, setImageFromServer)
    
  },[boat.photo])
  return (
    <Card>
      <One>
        {boat.photo ? (
          <img src={imageFromServer} alt="" />
        ) : (
          <div className="img1"></div>
        )}
      </One>
      <Two>
        <div className="info">
          <h2>{boat.modellname}</h2>
          <h2>{boat.price} SEK</h2>
          {boat.sail !== "yes" ? <h4>Type: Motorized</h4> : <h4>Type: Sail</h4>}

          <h4>Manifactured: July 1, {boat.manifacturedYear}</h4>
        </div>
      </Two>
    </Card>
  );
}
