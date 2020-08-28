import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 800px;
  height: 320px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  padding-right: 50px;
  padding-left: 50px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  h2{
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
    
    #upBtn{
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
  }
`;
const UploadButton = styled.button`
  	height: 35px;
    width: 90px;
    border: none;
    background: #28a745;
    border-radius: 3px;
    color: white;
    font-size: 15px;
    font-weight: 400;
    float: left;
    margin-top: 7px;
	outline: none;
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

function Add() {
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
          />
        </div>
        <div className="priceField">
          <label htmlFor="Price">Price</label>
          <InputFieldStyle id="Price" type="text" placeholder="Price..." />
        </div>
      </div>
      <div className="Two">
        <div className="manifacturedYear">
          <label htmlFor="Manifacturedyear">Manifactured Year</label>
          <InputFieldStyle
            id="Manifacturedyear"
            type="text"
            placeholder="Year..."
          />
        </div>
        <div className="typeOfBoat">
          <label id="TypeLabel" htmlFor="Type">
            Type
          </label>
          <div id="Type">
            <input type="radio" id="Sail" name="choice"></input>
            <label htmlFor="Sail">Sail</label>
            <br />
            <input type="radio" id="Motor" name="choice"></input>
            <label htmlFor="Motor">Motorized</label>
          </div>
        </div>
      </div>
      <div className="Three">
            <button id="upBtn" type="button">Upload</button>
      </div>
    </FilterWrapper>
  );
}

export default Add;
