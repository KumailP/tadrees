import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const OuterDiv = styled.div`
  width: 100%;
  background-image: url("images/volunteer.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.95;
  background: #181817;
`;

const Container = styled.div`
  max-width: 1000px;
  padding: 50px 0px;
  margin: 0 auto;
  justify-content: space-between;
`;

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-family: "Roboto", sans-serif;

  & h1 {
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
    & span {
      color: #ea5d29;
    }
  }

  & p {
    margin-top: 0px;
    color: #dddddd;
  }
`;

const JoinBtn = styled(Button)`
  && {
    margin-top: 15px;
    border-radius: 0;
    font-size: 14px;
    padding: 12px 25px;
    letter-spacing: 2px;
    border: 3px solid #ea5d29;
  }
`;

export default () => {
  return (
    <OuterDiv>
      <Overlay />
      <Container>
        <Content>
          <h1>
            Become a <span>Volunteer</span>
          </h1>
          <p>Stand out, speak up & make a difference!</p>
          <JoinBtn color="primary" variant="outlined">
            Join Us
          </JoinBtn>
        </Content>
      </Container>
    </OuterDiv>
  );
};
