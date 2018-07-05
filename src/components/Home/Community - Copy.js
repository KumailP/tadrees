import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100%;
  position: relative;
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
  // margin-top: 100px;
  // width: 100%;
  // height: 250px;
  text-align: justify;
  text-justify: inter-word;

  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;

  // background-color: #eeeeee;
  z-index: -1;
  // position: absolute;
`;

const RightCard = styled.div`
  text-align: justify;
  text-justify: inter-word;

  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;

  // background-color: #eeeeee;
  z-index: -1;
`;

const RightImg = styled.img`
  max-width: 550px;
  margin-left: 50%;
  z-index: 1000;
`;

const LeftImg = styled.img`
  max-width: 550px;
  z-index: 1000;
`;

const LeftCardInner = styled.div`
  position: absolute;
  top: 100px;
  margin-left: 600px;
  text-align: justify;
  text-justify: inter-word;
  & h2 {
    color: #282827;
  }
  & p {
    color: #444444;

    & span {
      color: #ea5d29;
    }

    &:before {
      content: "";
      min-height: 250px;
      background-color: #eeeeee;
      top: -30px;
      position: absolute;
      display: inline-block;
      z-index: -500;

      width: 75.65vw;
      margin-left: -30vw;
      left: 5%;
    }
  }
`;

const RightCardInner = styled.div`
  position: absolute;
  top: 100px;
  text-align: justify;
  text-justify: inter-word;
  margin-right: 55%;
  & h2 {
    color: #282827;
  }
  & p {
    color: #444444;

    & span {
      color: #ea5d29;
    }

    &:before {
      content: "";
      min-height: 250px;
      background-color: #eeeeee;
      top: -30px;
      position: absolute;
      display: inline-block;
      z-index: -500;

      width: 100vw;
      margin-left: calc(-70vw + 50% - 8px);
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
          <LeftImg src="images/2.jpg" alt="Eid Celebration" />
        </Container>
      </LeftCard>

      <RightCard>
        <Container>
          <RightCardInner>
            <h2>Winter Campaign '17</h2>
            <p>
              <span>Distributed:</span> 200 warm clothes children children
            </p>
            <p>
              To keep the deprived ones warm during the chills of winter,
              Tadrees launched a campaign to provide the needy and homeless with
              winter essentials. We managed to cater 200 underprivileged people.
            </p>
          </RightCardInner>
          <RightImg src="images/3.jpg" alt="Winter Campaign" />
        </Container>
      </RightCard>

      {/* <RightCard>
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
        </Container>
      </RightCard>
      <Container>
        <RightImg src="images/3.jpg" alt="Eid Celebration" />
      </Container> */}
    </Wrapper>
  );
};
