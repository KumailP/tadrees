import React from "react";
import styled from "styled-components";

const BottomFooter = styled.div`
  background-color: #282827;
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 25px 5px;
  font-size: 0.8em;
  color: white;
  letter-spacing: 1px;

  & span {
    color: #f05a28;
    text-transform: uppcase;
    font-weight: bold;
  }
`;

export default () => {
  return (
    <BottomFooter>
      <span>TADREES</span> - &copy; Copyright 2018. Developed by{" "}
      <span>kumailpirzada.com</span>
    </BottomFooter>
  );
};
