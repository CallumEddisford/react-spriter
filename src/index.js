import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";

const spriteAnimation = (props) => keyframes`
  to {
    background-position:
      ${props.isInfinite ? `-${props.positionOffset || 0}px` : `-${props.positionOffset - props.frameWidth || 0}px`}
      -${props.layer ? props.layer * props.frameHeight : 0}px;
  }
`;

const Sprite = styled.div`
  background: url(${(props) => props.sprite}) no-repeat;
  width: ${(props) => props.frameWidth || 0}px;
  height: ${(props) => props.frameHeight || 0}px;
  background-position: 0 -${(props) => (props.layer ? props.layer * props.frameHeight : 0)}px;

  ${(props) =>
    props.shouldAnimate &&
    css`
      animation:
        ${spriteAnimation(props)} ${props.duration || 1000}ms
        steps(${props.isInfinite ? props.frames || 0 : (props.frames || 0) - 1})
        ${props.isInfinite ? "infinite" : "forwards"};
    `};
`;

class ReactSpriter extends Component {
  constructor(props) {
    super(props);
    this.frames = Math.floor(this.props.spriteWidth / this.props.frameWidth);
  }

  render() {
    return (
      <Sprite
        { ...this.props }
        positionOffset={this.props.spriteWidth}
        shouldAnimate={this.props.shouldAnimate}
        frames={this.frames}
      />
    );
  }
}

export default ReactSpriter;
