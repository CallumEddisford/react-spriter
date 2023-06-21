import React from "react";
import ReactSpriter from "../../";
import "./styles.css";
import "../global.css";

function TryYourself({
  sprite,
  spriteWidth,
  frameWidth,
  frameHeight,
  duration,
  isInfinite,
  shouldAnimate,
  layer
}) {
  return (
    <div className="container-try">
      <ReactSpriter
        sprite={sprite}
        spriteWidth={spriteWidth}
        frameWidth={frameWidth}
        frameHeight={frameHeight}
        duration={duration}
        isInfinite={isInfinite}
        shouldAnimate={shouldAnimate}
        layer={layer}
      />
      <p>Try it out youself!</p>
      <p>Add you own sprite URL in the controls panel, then configure the options accordingly</p>
    </div>
  );
}

export default TryYourself;
