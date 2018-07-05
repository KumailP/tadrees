import React from "react";
import styled from "styled-components";
import {
  faHandsHelping,
  faHandHoldingHeart,
  faUniversity,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OuterDiv = styled.div`
  width: 100%;
  background-color: #ea5d29;
  position: relative;
`;

const Container = styled.div`
  max-width: 1000px;
  padding: 50px 0px;
  margin: 0 auto;
`;

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-family: "Roboto", sans-serif;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;

  & span {
    flex: 1;
    margin-top: 0px;
    color: #dddddd;
    padding: 0px 50px;
    padding-top: 25px;
    padding-bottom: 20px;

    & h1 {
      margin: 5px;
      margin-bottom: 0px;
    }

    & p {
      margin: 0px;
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2em;
`;

export default () => {
  return (
    <OuterDiv>
      <Container>
        <Content>
          <span>
            <Icon icon={faHandsHelping} />
            <h1>8</h1>
            <p>Volunteers</p>
          </span>
          <span>
            <Icon icon={faHandHoldingHeart} />
            <h1>100</h1>
            <p>Donors</p>
          </span>
          <span>
            <Icon icon={faCalendarAlt} />
            <h1>30</h1>
            <p>Completed Causes</p>
          </span>
          <span>
            <Icon icon={faUniversity} />
            <h1>1</h1>
            <p>School</p>
          </span>
        </Content>
      </Container>
    </OuterDiv>
  );
};
