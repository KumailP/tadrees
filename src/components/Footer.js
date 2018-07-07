import React from "react";
import styled from "styled-components";

const BottomFooter = styled.div`
  font-family: "Roboto", sans-serif;
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

const TopFooter = styled.div`
  padding: 20px;
  background-color: #222221;
  color: white;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Social = styled.div``;

const Newsletter = styled.div``;

const Contact = styled.div``;

const Heading = styled.h1`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default () => {
  return (
    <React.Fragment>
      <TopFooter>
        <Container>
          <Social>
            <Heading>Our Social Media</Heading>
            <ul>
              <li>FB</li>
              <li>TW</li>
              <li>IG</li>
            </ul>
          </Social>
          <Newsletter>
            <Heading>Newsletter Signup</Heading>
          </Newsletter>
          <Contact>
            <Heading>Contact Us</Heading>
            <p>+92 332 7490902</p>
            <p>tadrees44@gmail.com</p>
          </Contact>
        </Container>
      </TopFooter>
      <BottomFooter>
        <span>TADREES</span> - &copy; Copyright 2018. Developed by{" "}
        <span>kumailpirzada.com</span>
      </BottomFooter>
    </React.Fragment>
  );
};
