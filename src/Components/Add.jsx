import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
const FilterWrapper = styled.div`
  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 800px;
  height: 460px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  padding-right: 50px;
  padding-left: 50px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  h2 {
    font-size: 23px;
    font-weight: 400;
  }
  .One {
    height: 75px;
    display: block;
    box-sizing: border-box;
    text-align: left;
    display: flex;
    .modelField {
      height: 75px;
      width: 50%;
      display: block;
      label {
        font-size: 12px;
        color: #444;
        display: block;
      }
    }
    .priceField {
      height: 75px;
      width: 50%;
      display: block;
      label {
        font-size: 12px;
        color: #444;
        display: block;
      }
    }
  }
  .Two {
    height: 75px;
    display: block;
    box-sizing: border-box;
    text-align: left;
    display: flex;
    .manifacturedYear {
      height: 75px;
      width: 50%;
      display: block;
      box-sizing: border-box;
      label {
        font-size: 12px;
        color: #444;
        display: block;
      }
    }
    .typeOfBoat {
      height: 75px;
      width: 50%;
      display: block;
      box-sizing: border-box;
      #TypeLabel {
        font-size: 12px;
        color: #444;
        display: block;
      }
    }
  }
  .Three {
    height: 75px;

    #upBtn {
      height: 35px;
      width: 90px;
      border: none;
      background: #28a745;
      border-radius: 3px;
      color: white;
      font-size: 15px;
      font-weight: 400;
      float: right;
      margin-top: 7px;
      outline: none;
    }
    .preview {
      float: left;
      img {
        height: 100px;
        width: 150px;
      }
    }
  }
  .imageUrlArea {
    text-align: initial;
    margin-bottom: 25px;
    #urlInput {
      width: 100%;
    }
  }
`;

const InputFieldStyle = styled.input`
  margin-top: 3px;
  height: 41px;
  width: 90%;
  padding: 12px 20px;
  outline: none;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  InputArea[type="text"]:focus,
  :focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;
const baseUrl = "http://localhost:5000/";
function sendBoatToServer(payload, clearInput) {
  axios
    .post(`${baseUrl}boat`, { params: payload })
    .then((res) => {
      clearInput();
    })
    .catch((err) => console.log("Of course it dosent work" + err));
}
function savePhoto(formData) {
  axios
    .post(`${baseUrl}upload/photo`, formData, {
      headers: {
        "Content-type": "multipart/formData",
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));
}
function Add() {
  const [modelName, setModelName] = useState("");
  const [price, setPrice] = useState("");
  const [manifacturedDate, setManifacturedDate] = useState("");
  const [typeOfBoat, setTypeOfBoat] = useState("");
  //const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [prevFile, setPrevFile] = useState("");
  function clearInput() {
    setModelName("");
    setPrice("");
    setManifacturedDate("");
    setTypeOfBoat("");
    //setImageUrl("");
    setPrevFile("")
  }

  const boatToBeAdded = {
    modellname: "",
    price: 0,
    manifacturedYear: "",
    motorized: "",
    sail: "",
    photo: "",
  };

  const onChange = (e) => {
    if (e.target.files.length !== 0) {
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
      setPrevFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  function sendData() {
    const formData = new FormData();
    formData.append("file", file);
    if (
      modelName !== "" &&
      price !== "" &&
      manifacturedDate !== "" &&
      typeOfBoat !== ""
    ) {
      boatToBeAdded.modellname = modelName;
      boatToBeAdded.price = parseInt(price);
      boatToBeAdded.manifacturedYear = parseInt(manifacturedDate);
      if (typeOfBoat === "sail") {
        boatToBeAdded.motorized = "no";
        boatToBeAdded.sail = "yes";
      } else {
        boatToBeAdded.motorized = "yes";
        boatToBeAdded.sail = "no";
      }
      boatToBeAdded.photo = fileName;
      sendBoatToServer(boatToBeAdded, clearInput);
      savePhoto(formData);
    } else {
      return;
    }
  }
  return (
    <FilterWrapper>
      <h2>Upload new ship</h2>
      <div className="One">
        <div className="modelField">
          <label htmlFor="ModelName">Model Name</label>
          <InputFieldStyle
            id="ModelName"
            type="text"
            placeholder="Model Name..."
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
          />
        </div>
        <div className="priceField">
          <label htmlFor="Price">Price</label>
          <InputFieldStyle
            id="Price"
            type="text"
            placeholder="Price..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="Two">
        <div className="manifacturedYear">
          <label htmlFor="Manifacturedyear">Manifactured Year</label>
          <InputFieldStyle
            id="Manifacturedyear"
            type="text"
            placeholder="Year..."
            value={manifacturedDate}
            onChange={(e) => setManifacturedDate(e.target.value)}
          />
        </div>
        <div className="typeOfBoat">
          <label id="TypeLabel" htmlFor="Type">
            Type
          </label>
          <div id="Type" onChange={(e) => setTypeOfBoat(e.target.value)}>
            <input type="radio" id="Sail" name="choice" value="sail"></input>
            <label htmlFor="Sail">Sail</label>
            <br />
            <input
              type="radio"
              id="Motor"
              name="choice"
              value="motorized"
            ></input>
            <label htmlFor="Motor">Motorized</label>
          </div>
        </div>
      </div>
      <div className="imageUrlArea">
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          onChange={onChange}
        />
      </div>

      <div className="Three">
        <button id="upBtn" type="button" onClick={() => sendData()}>
          Upload
        </button>

        <div className="preview">
          <img
            src={prevFile ? prevFile : require("../assets/tugboat.jpg")}
            alt="img"
          />
        </div>
      </div>
    </FilterWrapper>
  );
}

export default Add;
