import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

export default () => {
  return (
    <Background>
      <Container>
        <Content>
          <h1>About Tadrees</h1>
          <p>
            A non-profit organization that aims to provide quality education to
            the underprivileged children of society, by building a chain of
            schools all over Pakistan, in order to eliminate social problems
            like poverty, gender discrimination and unhealthy environment.
          </p>
          <ReadMoreBtn color="primary" variant="contained">
            Read More
          </ReadMoreBtn>
        </Content>
        <Video>
          <iframe
            src="https://www.youtube.com/embed/VO38aC2z6ck?rel=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="About Tadrees Video"
          />
        </Video>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  background-color: #f7f7f7;
  padding: 50px 0px 40px 0px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Content = styled.div`
  flex: 1;
  padding: 30px 0px;
  margin: 0px 50px;
  position: relative;

  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;

  & h1 {
    margin: 0px;
    text-transform: uppercase;
    color: #282827;
  }

  & p {
    color: #444444;
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.5;
    margin-bottom: 70px;
  }
`;

const ReadMoreBtn = styled(Button)`
  && {
    position: absolute;
    bottom: 20px;
    left: 0;
    border-radius: 0;
    font-size: 12px;
    padding: 12px 25px;
    letter-spacing: 1px;
  }
`;

const Video = styled.div`
  flex: 1;
  min-height: 100%;

  & iframe {
    min-width: 100%;
    min-height: 100%;
  }
`;
