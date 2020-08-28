import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 800px;
  height: 250px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  padding-right: 50px;
  padding-left: 50px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;
const InputField = styled.div`
  height: 50px;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;
const InputArea = styled.input`
  width: 100%;
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
const InputField2 = styled.div`
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
`;
const InputField3 = styled.div`
  
  height: 50px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
`;
const MaxPrice = styled.div`
  height: 100%;
  width: 100%;
  text-align: left;
`;
const MaxPriceLabel = styled.label`
  margin-left: 10px;
`;
const MaxPriceInput = styled.input`
  margin-top: 3px;
  margin-left: 37px;
  width: 50%;
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
const Type = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding-top: 11px;
`;
const TypeLabel = styled.label``;

const TypeInput = styled.input`
  vertical-align: text-bottom;
  margin-left: 10px;
  margin-right: 10px;
`;

const ManifacturedYear = styled.div`
  
  height: 100%;
  width: 100%;
  text-align: left;
  display: flex;
`;

const ManifacturedYearInput = styled.input`
  margin-top: 3px;
  height: 41px;
  width: 50%;
  padding: 12px 20px;
  outline: none;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-left: 10px;
  InputArea[type="text"]:focus,
  :focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;
const OrderBy = styled.div`
  height: 100%;
 
  width: 100%;
  text-align: left;
  padding-top: 11px;
  box-sizing: border-box;
`;

const Select = styled.select`
  margin-left: 20px;
  outline: none;
`;

const InputField4 = styled.div`
  height: 50px;
  width: 100%;
  box-sizing: border-box;
`;
const SerachButton = styled.button`
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
export default function Filter() {
  return (
    <FilterWrapper>
      <InputField>
        <InputArea placeholder="Search Model Name..."></InputArea>
      </InputField>
      <InputField2>
        <MaxPrice>
          <MaxPriceLabel htmlFor="maxPrice"> Max Price: </MaxPriceLabel>
          <MaxPriceInput id="maxPrice" placeholder="Max Price"></MaxPriceInput>
        </MaxPrice>
        <Type>
          <TypeLabel htmlFor="motorType">Motorised:</TypeLabel>
          <TypeInput id="motorType" type="checkbox"></TypeInput>
          <TypeLabel htmlFor="sailType">Sail:</TypeLabel>
          <TypeInput id="sailType" type="checkbox"></TypeInput>
        </Type>
      </InputField2>
      <InputField3>
        <ManifacturedYear>
          <div>
            <input type="radio" id="madeBehtmlFore" name="choice"></input>
            <label htmlFor="madeBehtmlFore">Made Before</label>
            <br />
            <input type="radio" id="madeAfter" name="choice"></input>
            <label htmlFor="madeAfter">Made After</label>
          </div>

          <ManifacturedYearInput
            type="text"
            placeholder="Year..."
          ></ManifacturedYearInput>
        </ManifacturedYear>
        <OrderBy>
			<label htmlFor="orderby">Order by:</label>
			<Select name="cars" id="orderby">
				<option value="lowToHigh">Low - High (price)</option>
				<option value="highToLow">High - Low (price)</option>
				<option value="alpha">Alphabetical order</option>
				<option value="nAlpha"> Reverse Alphabetical order</option>
				<option value="new">New</option>
				<option value="old">Oldest</option>
			</Select>
  
		</OrderBy>
      </InputField3>
      <InputField4>
	  		<SerachButton>Serach</SerachButton>
	  </InputField4>
    </FilterWrapper>
  );
}
