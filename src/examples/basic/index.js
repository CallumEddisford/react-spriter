import React from "react";
import ReactSpriter from "../../";
import sprite from "./twitter_sprite.png";
import "./styles.css";

function Basic() {
  return (
    <div className="container-basic">
      <ReactSpriter
        sprite={sprite}
        spriteWidth={25000}
        frameWidth={200}
        frameHeight={200}
        duration={5000}
        isInfinite
        shouldAnimate
      />
    </div>
  );
}

export default Basic;
