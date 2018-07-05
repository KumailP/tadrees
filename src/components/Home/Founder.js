import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Header = styled.div`
  text-align: center;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;

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
  padding-top: 30px;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
`;

const LeftItem = styled.div`
  flex: 1;
`;

const LeftInner = styled.div``;

const LeftHeading = styled.p``;

const LeftSubHeading = styled.p``;

const RightItem = styled.div`
  flex: 1;
  background-color: #eeeeee;
  padding: 20px;
  text-align: justify;
  text-justify: inter-word;
  letter-spacing: 1px;
  line-height: 1.5;
`;

const RightText = styled.p``;

const RightBtn = styled(Button)``;

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
              I used to see them daily, at the main gate of my university i.e.
              NED University, selling tissue papers. I saw them begging as well.
              Like every passerby, they would come to bug me as well, while I
              always scolded them and asked them to go away since I always got
              irritated of their clingy behavior. There were many of them, all
              aged between 9-10 years. One day, I saw something strange. A group
              of those kids had gathered around one of their fellows. They
              seemed to be indulged in some ‘serious business’. Out of my
              curiosity, I went near them to look what was happening. The
              activity was not something I had expected. One kid out of all was
              teaching ABC to his fellows, and rest of the children was actually
              taking this ‘class’ with such interest. This happening swelled my
              heart with delight. I asked them what they wanted to do after they
              learnt this and their response to my question moved me. They all
              spontaneously replied “Humein baray ho kar NED me parhna hai” (We
              want to study in NED University once we grow up). Their reaction
              clicked my heart. That was the moment I decided that I have to do
              something, for them. It was Friday then. I pondered over it
              throughout my weekend to come up with ideas for their betterment.
              All I knew that, I have to do something for these under privileged
              children. They had a will to study but lacked resources. At that
              instance, all I could do was to setup a class room and teach them,
              at my own, since the lack of resources was my constraint as well.
              Then Monday that followed, I again met them. I initiated a small
              set up, merely at a foot path and began to teach them. Eventually,
              this became a part of my routine. Whenever I met them, I would
              bring something for them to eat, to cherish this “teacher -student
              bond”. I used to teach them daily for like an hour or so. After a
              passage of time, I began to realize that this is not enough of
              what I can do. Nor my gesture is going to work for them in the
              long run; neither will assist them in their future building. For a
              secured future, their admission in schools is inevitable. This
              thought took me past my comfort zone. Now, I really wanted to do
              it, that I knew, would not be possible without a support system. I
              discussed my idea with my university friends. I am thoroughly
              grateful to them for believing in and joining hands with me for
              this noble cause. Their support kept me going. With their
              furtherance, I was soon allotted a proper room in the premises of
              our university, where we managed to conduct proper classes for
              those children, and made them able to clear the entry tests of
              different schools. We launched our welfare organization named as
              “Tadrees”, and received overwhelming response. Team Tadrees is
              working day in and day out, and by the grace of Almighty, we have
              already been able to taste the fruit of our struggle since we have
              launched our first school opposite to NED University and 100
              children are enrolled in our school for now. Yet many are still
              looking forward to their admissions. Our motive is “Education for
              all” and for that we’re planning on to grow our network to help as
              many underprivileged street children as possible by building a
              chain of schools all over Pakistan.
            </RightText>
            <RightBtn />
          </RightItem>
        </Content>
      </Container>
    </Wrapper>
  );
};
