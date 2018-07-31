import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
  font-size: 2em;
  color: #ea5d29;
`;

const Header = styled.div`
  text-align: center;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;

  & h1 {
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
  padding-top: 30px;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;
  box-shadow: 1px 1px 2px #aeaeae;
`;

const LeftItem = styled.div`
  background-image: url("/images/founder.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 2;
  position: relative;
  min-height: 400px;
  min-width: 300px;
`;

const LeftInner = styled.div`
  background-color: #f7f7f7;
  border-left: 5px solid #ea5d29;
  padding: 15px 30px;
  position: absolute;
  bottom: 20px;
  left: -10px;
  z-index: 200;
  box-shadow: 1px 1px 2px #777;

  & p {
    margin: 0px;
    padding: 0px;
    font-family: "Roboto", sans-serif;
    margin: 3px 10px;
  }

  @media (max-width: 640px) {
    left: 10px;
  }
`;

const LeftHeading = styled.p`
  color: #444444;
  font-weight: bold;
`;

const LeftSubHeading = styled.p`
  color: #ea5d29;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const RightItem = styled.div`
  border-top: 5px solid black;
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
  flex: 5;
  background-color: #eeeeee;
  padding: 0px 20px;
  text-align: justify;
  text-justify: inter-word;
  letter-spacing: 0.8px;
  line-height: 1.5;
  position: relative;
  min-width: 300px;
`;

const RightText = styled.div`
  margin-bottom: 60px;
`;

const ReadMoreBtn = styled(Button)`
  && {
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 0;
    font-size: 12px;
    padding: 12px 25px;
    letter-spacing: 1px;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <h1>How Tadrees Started</h1>
          <p>Meet Our Founder</p>
        </Header>
        <Content>
          <LeftItem>
            <LeftInner>
              <LeftHeading>Arooha Dar</LeftHeading>
              <LeftSubHeading>Founder</LeftSubHeading>
            </LeftInner>
          </LeftItem>
          <RightItem>
            <RightText>
              <p>
                <Icon icon={faQuoteLeft} /> I used to see them daily, at the
                main gate of my university i.e. NED University, selling tissue
                papers. I saw them begging as well. Like every passerby, they
                would come to bug me as well, while I always scolded them and
                asked them to go away since I always got irritated of their
                clingy behavior. There were many of them, all aged between 9-10
                years.
              </p>
              <p>
                One day, I saw something strange. A group of those kids had
                gathered around one of their fellows. They seemed to be indulged
                in some ‘serious business’. Out of my curiosity, I went near
                them to look what was happening. The activity was not something
                I had expected. One kid out of all was teaching ABC to his
                fellows, and rest of the children was actually taking this
                ‘class’ with such interest.
              </p>
              <p>
                This happening swelled my heart with delight. I asked them what
                they wanted to do after they learnt this and their response to
                my question moved me. They all spontaneously replied “Humein
                baray ho kar NED me parhna hai” (We want to study in NED
                University once we grow up). Their reaction clicked my heart.
                That was the moment I decided that I have to do something, for
                them.
              </p>
            </RightText>
            <ReadMoreBtn color="primary" variant="contained">
              Read More
            </ReadMoreBtn>
          </RightItem>
        </Content>
      </Container>
    </Wrapper>
  );
};
