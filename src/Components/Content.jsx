import React from 'react'
import styled from "styled-components";


const ContentWrapper = styled.div`
  box-shadow: 1px 4px 8px 2px rgba(0,0,0,0.2);
  width: 800px;
  height: 200px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`
export default function Content() {
    return (
        <ContentWrapper>
            content here
        </ContentWrapper>
    )
}
