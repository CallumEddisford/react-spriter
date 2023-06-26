import TryYourself from "../examples/try-yourself";
import sprite from "../examples/binary-tree/character.jpg";

export default {
  title: 'Examples',
  component: TryYourself,
  parameters: {
    layout: 'fullscreen',
  },
};

export const TryItOut = {
  args: {
    sprite,
    spriteWidth: 735,
    frameWidth: 183.75,
    frameHeight: 275.25,
    elementWidth: 150,
    duration: 500,
    isInfinite: true,
    shouldAnimate: true,
    layer: 0
  },
};
