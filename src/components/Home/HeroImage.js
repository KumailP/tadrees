import React from "react";
import Button from "@material-ui/core/Button";
import { Desktop } from "../MediaQueries";
import styled from "styled-components";

export default () => {
  return (
    <HeroImage>
      <Overlay />
      <HeroText>
        <h1>
          Right to<Desktop>
            <br />
          </Desktop>{" "}
          Education
        </h1>
        <p>Help Tadrees in spreading smiles & education</p>
        <Desktop>
          <HeroDonateBtn color="primary" variant="contained">
            Donate
          </HeroDonateBtn>
        </Desktop>
      </HeroText>
    </HeroImage>
  );
};

const HeroImage = styled.div`
  background-image: url("images/hero-small.jpg");
  height: 600px;
  margin-top: 135px;
  // height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-bottom: 10px solid black;
  border-image: linear-gradient(
      to right,
      #f8b51f 0%,
      #f8b51f 33%,
      #ea5d29 33%,
      #ea5d29 66%,
      #006938 66%,
      #006938 100%
    )
    5;

  @media (max-width: 767px) {
    // mobile
    height: 300px;
    margin-top: 120px;
  }
  @media (max-width: 991px) {
    // tablet
    height: 400px;
    margin-top: 110px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.4;
  transition: 0.3s ease;
  background: linear-gradient(
    to right,
    black 0%,
    black 10%,
    rgba(255, 0, 0, 0) 35%
  );
`;

const HeroText = styled.div`
  text-align: left;
  position: absolute;
  top: 20%;
  left: 15%;
  color: white;
  text-shadow: 2px 2px 5px black;

  & p {
    font-size: 18px;
  }

  & h1 {
    letter-spacing: 3px;
    font-size: 70px;
    margin-bottom: 0px;
  }
  @media (max-width: 991px) {
    left: 5%;
    top: 50%;

    & h1 {
      font-size: 50px;
    }
  }
  @media (max-width: 767px) {
    text-align: center;
    top: 60%;
    left: 0;
    right: 0;

    & h1 {
      font-size: 30px;
    }
  }
`;

const HeroDonateBtn = styled(Button)`
  && {
    font-size: 20px;
    letter-spacing: 2px;
    padding-left: 80px;
    padding-right: 80px;
    background-color: #d67e20;
    margin-top: 20px;
    border-radius: 0;
  }
`;
