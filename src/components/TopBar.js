import React, { Component } from "react";
import styled from "styled-components";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Desktop, MobileOrTablet } from "./MediaQueries";
import Button from "@material-ui/core/Button";

export default class TopBar extends Component {
  render() {
    return (
      <OuterDiv>
        <Container>
          <TopBarList>
            <LeftListItem>
              <FontAwesomeIcon icon={faFacebook} />
            </LeftListItem>
            <LeftListItem>
              <FontAwesomeIcon icon={faTwitter} />
            </LeftListItem>
            <LeftListItem>
              <FontAwesomeIcon icon={faInstagram} />
            </LeftListItem>
          </TopBarList>
          <TopBarList>
            <Desktop>
              <RightListItem>tadrees44@gmail.com</RightListItem>
              <RightListItem>+92 332 7490902</RightListItem>
              <RightListItem>
                Block #2, Gulistan-e-Johar, Opposite NED University, Karachi
              </RightListItem>
            </Desktop>
            <MobileOrTablet>
              <MobileDonateBtn color="primary" variant="contained">
                Donate
              </MobileDonateBtn>
            </MobileOrTablet>
          </TopBarList>
        </Container>
      </OuterDiv>
    );
  }
}

const OuterDiv = styled.div`
  background-color: #282827;
  border-bottom: 1px solid black;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const TopBarList = styled.ul`
  margin: 0;
  padding: 0;
  color: white;
  font-family: "Roboto", sans-serif;
  list-style-type: none;
`;

const LeftListItem = styled.li`
  display: inline-block;
  margin: 0px 2px;
  padding: 8px;
  transition: 0.3s;
  font-size: 16px;

  &:hover {
    background-color: #ea5d29;
    transition: 0.3s;
    cursor: pointer;
  }

  @media (max-width: 991px) {
    &:first-child {
      padding-left: 10px;
    }
  }
`;

const RightListItem = styled.li`
  display: inline-block;
  margin: 10px 0px;
  padding: 0px 20px;
  font-size: 12px;

  &:not(:nth-child(3)) {
    border-right: 1px solid #58595b;
  }

  @media (max-width: 991px) {
    &:first-child {
      padding: 0px 10px 0px 0px;
    }
  }
`;

const MobileDonateBtn = styled(Button)`
  && {
    border-radius: 0%;
    padding: 0px 30px;
    letter-spacing: 1px;
  }
`;
