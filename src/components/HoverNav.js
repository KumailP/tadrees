import React, { Component } from "react";
import Collapse from "@material-ui/core/Collapse";
import styled from "styled-components";

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.timer = this.props.timer;
  }
  handleMouseEnter = () => {
    clearTimeout(this.timer);
    this.setState({ visible: true });
  };
  handleMouseLeave = () => {
    this.timer = setTimeout(() => {
      this.setState({ visible: false });
    }, 500);
  };
  render() {
    const { items } = this.props;
    const listItems = items.map((v, i) => {
      return (
        <a href="google.com" key={i}>
          <li>{v}</li>
        </a>
      );
    });

    return (
      <HoverNav
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Collapse in={this.state.visible || this.props.show}>
          <HoverNavBorder>
            <Container>
              <ul>{listItems}</ul>
            </Container>
          </HoverNavBorder>
        </Collapse>
      </HoverNav>
    );
  }
}

const HoverNav = styled.div`
  background-color: #282827;
  border-bottom: 1px solid black;
  opacity: 1;
  width: 100%;
  position: absolute;

  & ul {
    list-style-type: none;
    margin: 0 auto;
    color: white;

    & a {
      color: white;
    }

    & li {
      display: inline-block;
      padding: 15px 20px;
      font-size: 13px;
      letter-spacing: 1px;
      transition: 0.5s;

      &:hover {
        background-color: #ea5d29;
        transition: 0.5s;
      }
    }
  }
`;

const HoverNavBorder = styled.div`
  border-top: 3px solid #ea5d29;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
