import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
`;

const Header = styled.div`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 30px;
  & h1 {
    text-transform: uppercase;
    color: #282827;
    margin-bottom: 5px;
  }

  & p {
    margin-top: 0px;
    color: #ea5d29;
    justify-content: flex-start;
    line-height: 1.5;
  }
`;

const LeftCard = styled.div`
  margin-top: 100px;
  width: 100%;
  min-height: 250px;

  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;

  background-color: #eeeeee;

  margin-bottom: 250px;
  position: relative;
  & img {
    position: absolute;
    // height: 500px;
    width: 525px;
    z-index: 1000;
    padding-left: 50px;
    top: -50px;
  }
`;

const RightCard = styled.div`
  margin-top: 440px;
  width: 100%;
  height: 250px;

  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;

  background-color: #eeeeee;

  margin-bottom: 400px;
  position: relative;
  & img {
    width: 525px;
    position: absolute;
    // height: 500px;
    z-index: 1000;
    padding-left: 50px;
    top: -50px;
    right: 400px;
  }
`;

const LeftCardInner = styled.div`
  padding: 20px;
  margin-left: 600px;
  & h2 {
    color: #282827;
  }
  & p {
    color: #444444;

    & span {
      color: #ea5d29;
    }
  }
`;

const RightCardInner = styled.div`
  padding: 20px;
  padding-left: 50px;
  margin-right: 500px;
  & h2 {
    color: #282827;
  }
  & p {
    color: #444444;

    & span {
      color: #ea5d29;
    }
  }
`;

export default () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Header>
            <h1>Helping Community</h1>
            <p>
              We are committed in helping our community, we are making lives by
              giving
            </p>
          </Header>
        </Content>
      </Container>

      <LeftCard>
        <Container>
          <img src="images/2.jpg" alt="Eid Celebration" />
          <LeftCardInner>
            <h2>Eid Celebration '18</h2>
            <p>
              <span>Distributed:</span> 140 goody bags to underprivileged
              children
            </p>
            <p>
              We celebrated this occassion with the underprivileged. We spent
              the second day of Eid with Tadrees students and distributed goody
              bags to 140 children as Eidi.
            </p>
          </LeftCardInner>
        </Container>
      </LeftCard>

      <RightCard>
        <Container>
          <RightCardInner>
            <h2>Winter Campaign '17</h2>
            <p>
              <span>Distributed:</span> 200 warm clothes children
            </p>
            <p>
              To keep the deprived ones warm during the chills of winter,
              Tadrees launched a campaign to provide the needy and homeless with
              winter essentials. We managed to cater 200 underprivileged people.
            </p>
          </RightCardInner>
          <img src="images/3.jpg" alt="Eid Celebration" />
        </Container>
      </RightCard>
    </Wrapper>
  );
};
