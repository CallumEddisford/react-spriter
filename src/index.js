import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";

const spriteAnimation = (props) => keyframes`
  to {
    background-position: ${
      props.isInfinite
        ? `-${
            props.resize ? props.spriteWidth / props.resize : props.spriteWidth
          }px`
        : `-${
            props.resize
              ? props.spriteWidth / props.resize -
                props.frameWidth / props.resize
              : props.spriteWidth - props.frameWidth || 0
          }px`
    } -${
  props.layer
    ? props.resize
      ? props.layer * (props.frameHeight / props.resize)
      : props.layer * props.frameHeight
    : 0
}px;
  }
`;

const Sprite = styled.div`
  background: url(${(props) => props.sprite}) no-repeat;
  width: ${(props) =>
    props.resize ? props.frameWidth / props.resize : props.frameWidth}px;
  height: ${(props) =>
    props.resize ? props.frameHeight / props.resize : props.frameHeight || 0}px;
  background-position: 0 -${(props) => (props.layer ? (props.resize ? props.layer * (props.frameHeight / props.resize) : props.layer * props.frameHeight) : 0)}px;

  ${(props) =>
    props.resize && `background-size: ${props.spriteWidth / props.resize}px;`}

  ${(props) =>
    props.shouldAnimate &&
    css`
      animation: ${spriteAnimation(props)} ${props.duration || 1000}ms
        steps(${props.isInfinite ? props.frames || 0 : (props.frames || 0) - 1})
        ${props.isInfinite ? "infinite" : "forwards"};
    `};
`;

class ReactSpriter extends Component {
  constructor(props) {
    super(props);
    this.frames = Math.floor(this.props.spriteWidth / this.props.frameWidth);
    this.state = {
      resize: this.calculateResize(this.props.elementWidth),
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.elementWidth !== this.props.elementWidth) {
      const resize = this.calculateResize(this.props.elementWidth);
      this.setState({ resize });
    }
  }

  calculateResize = (elementWidth) => {
    return elementWidth !== undefined
      ? this.props.frameWidth / elementWidth
      : null;
  };

  render() {
    const { resize } = this.state;
    const { spriteWidth } = this.props;

    return (
      <Sprite
        {...this.props}
        spriteWidth={spriteWidth}
        shouldAnimate={this.props.shouldAnimate}
        frames={this.frames}
        resize={resize}
      />
    );
  }
}

export default ReactSpriter;
