import React from "react";
import styled from "styled-components";

const HeadDiv = styled.div`
  width: 100%;
  text-align: center;
  padding: 5px;
  background-color: gray;
  position: sticky;
  top: 0;
`;

const Header = () => {
  return <HeadDiv>Angular/Angular-cli</HeadDiv>;
};

export default Header;
