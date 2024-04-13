import React from "react";
import styled from "styled-components";

const HeadDiv = styled.div`
  width: 100%;
  padding: 5px;
  background-color: #fff;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  height: 50px;
  font-size: 1.5em;

  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
`;

const Header = () => {
  return <HeadDiv>Angular/Angular-cli</HeadDiv>;
};

export default Header;
