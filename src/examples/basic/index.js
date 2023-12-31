import React from "react";
import ReactSpriter from "../../";
import sprite from "./twitter_sprite.png";
import "./styles.css";
import "../global.css";

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
      <p>Sprite: <a href="https://cliply.co/clip/twitter-icon/">https://cliply.co/clip/twitter-icon/</a></p>
    </div>
  );
}

export default Basic;
