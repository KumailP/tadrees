import React from "react";
import styled from "styled-components";
import { Default, Mobile } from "../MediaQueries";

const Header = styled.div`
  text-align: center;
  margin: 0 auto;

  & h1 {
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
    color: #282827;
  }

  & p {
    margin-top: 0px;
    color: #ea5d29;
  }
`;

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  padding-top: 30px;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 10px;
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.div`
  flex: 2;
  z-index: 1000;
  min-width: 300px; // test
  max-width: 100%;
  height: 450px;
  padding: 0;
  background-image: url("${props => props.ImgUrl}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  ${props => (props.right ? "margin-left: -10px" : "margin-right: -10px")};

  
  @media (max-width: 767px) {
    // mobile
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: -50px;
  }
`;

const Text = styled.div`
  background-color: #f7f7f7;
  min-width: 200px; // test
  flex: 3;
  ${props =>
    props.right
      ? "border-left: 5px solid #ea5d29"
      : "border-right: 5px solid #ea5d29"};
  max-height: 200px;
  padding: 40px;
  position: relative;
  letter-spacing: 1px;
  color: #444444;
  margin-top: 90px;
  box-shadow: 1px 1px 2px #aeaeae;
  h2 {
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
    color: #282827;
  }

  h4 {
    font-weight: normal;
  }

  span {
    color: #ea5d29;
  }

  p {
    text-align: justify;
    text-justify: inter-word;
  }
  @media (max-width: 767px) {
    // mobile
    margin-top: 0px;
    max-height: 500px;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <h1>Campaigns</h1>
          <p>
            We are committed in helping our community; we are making lives by
            giving
          </p>
        </Header>
        <Content>
          <Item>
            <Image ImgUrl="images/2-new.png" left />
            <Text>
              <h2>Eid Celebration '17</h2>
              <h4>
                <span>Distributed:</span> 140 goody bags to underprivileged
                children
              </h4>
              <p>
                We celebrated this occasion of happiness with the
                underprivileged. We spent the second day of Eid with Tadrees
                students and distributed goody bags to 140 children as Eidi
              </p>
            </Text>
          </Item>

          <Item>
            <Mobile>
              <Image ImgUrl="images/3-new.png" left />
            </Mobile>
            <Text right>
              <h2>Winter Campaign '17</h2>
              <h4>
                <span>Distributed:</span> 200 warm clothes children children
                children
              </h4>
              <p>
                To keep the deprived ones warm during the chills of winter,
                Tadrees launched a campaign to provide the needy and homeless
                with winter essentials. We managed to cater 200 underprivileged
                people
              </p>
            </Text>
            <Default>
              <Image ImgUrl="images/3-new.png" right />
            </Default>
          </Item>
        </Content>
      </Container>
    </Wrapper>
  );
};
