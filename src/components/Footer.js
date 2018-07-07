import React from "react";
import {
  faTwitter,
  faInstagram,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

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

const TopFooter = styled.div`
  padding: 20px;
  background-color: #181817;
  color: white;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Social = styled.div`
  & ul {
    list-style-type: none;
    padding: 0px;
    margin: 0 auto;
  }

  & li {
    display: inline-block;
    margin: 5px;
    padding: 12px;
    background-color: #222221;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: #f05a28;
      transition: 0.5s;
    }
  }
`;

const Newsletter = styled.div`
  & input {
    line-height: 2;
    padding: 5px;
    letter-spacing: 1px;
    border: 0px;
  }

  & button {
    color: white;
    background-color: #f05a28;
    border-radius: 0;
    margin: 0px;
    padding: 11px;
    border: 0px;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
      background-color: #f05a28;
    }
  }
`;

const Contact = styled.div`
  & p {
    font-size: 14px;
    letter-spacing: 1px;
  }
`;

const Heading = styled.h1`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

export default () => {
  return (
    <React.Fragment>
      <TopFooter>
        <Container>
          <Social>
            <Heading>Our Social Media</Heading>
            <ul>
              <li>
                <FIcon icon={faFacebookSquare} />
              </li>
              <li>
                <FIcon icon={faTwitter} />
              </li>
              <li>
                <FIcon icon={faInstagram} />
              </li>
            </ul>
          </Social>
          <Newsletter>
            <Heading>Newsletter Signup</Heading>
            <input
              type="text"
              name="newsletter-email"
              placeholder="Enter email"
            />

            <button type="button">
              <FontAwesomeIcon icon={faLocationArrow} />
            </button>
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
