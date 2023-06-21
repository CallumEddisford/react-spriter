import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";

const spriteAnimation = (props) => keyframes`
  to {
    background-position: -${props.positionOffset || 0}px -${props.layer ? props.layer * props.frameHeight : 0}px;
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
      animation: ${spriteAnimation(props)} ${props.duration || 1000}ms
        steps(${props.frames || 0}) ${props.isInfinite ? "infinite" : "forwards"};
    `};
`;

class ReactSpriter extends Component {
  constructor(props) {
    super(props);
    this.positionOffset = this.props.spriteWidth - this.props.frameWidth;
    this.frames = Math.floor(this.props.spriteWidth / this.props.frameWidth);
    this.shouldAnimate = this.props.shouldAnimate === undefined ? true : this.props.shouldAnimate;
  }

  render() {
    return (
      <Sprite
        sprite={this.props.sprite}
        frameWidth={this.props.frameWidth}
        frameHeight={this.props.frameHeight}
        positionOffset={this.props.spriteWidth}
        frames={this.frames}
        duration={this.props.duration}
        isInfinite={this.props.isInfinite}
        shouldAnimate={this.props.shouldAnimate}
        layer={this.props.layer}
      />
    );
  }
}

export default ReactSpriter;
