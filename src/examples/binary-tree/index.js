import React, { useEffect, useState } from "react";
import ReactSpriter from "../../";
import sprite from "./character.jpg";
import "./styles.css";
import "../global.css";

function BinaryTree() {
  const FACE_DOWN = 0;
  const FACE_UP = 1;
  const FACE_LEFT = 2;
  const FACE_RIGHT = 3;

  const [layer, setLayer] = useState(FACE_DOWN);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setShouldAnimate(true);
      if (event.key === "ArrowRight") setLayer(FACE_RIGHT);
      else if (event.key === "ArrowLeft") setLayer(FACE_LEFT);
      else if (event.key === "ArrowUp") setLayer(FACE_UP);
      else if (event.key === "ArrowDown") setLayer(FACE_DOWN);
    };

    const handleKeyUp = () => setShouldAnimate(false);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="container-character">
      <ReactSpriter
        sprite={sprite}
        spriteWidth={735}
        frameWidth={183.75}
        frameHeight={275.25}
        duration={500}
        isInfinite
        shouldAnimate={shouldAnimate}
        layer={layer}
      />
      <p>Use the arrow keys to walk</p>
      <p>Sprite: <a href="https://www.pinterest.co.uk/pin/434808539014119617/">https://www.pinterest.co.uk/pin/434808539014119617/</a></p>
    </div>
  );
}

export default BinaryTree;
