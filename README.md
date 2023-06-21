[![npm version](https://badge.fury.io/js/react-spriter.svg)](https://badge.fury.io/js/react-spriter)
![workflow](https://github.com/CallumEddisford/react-spriter/actions/workflows/npm-publish.yml/badge.svg)
![cypress](https://github.com/CallumEddisford/react-spriter/actions/workflows/test.yml/badge.svg)

# React Spriter
ReactSpriter is a React component that allows you to create animated sprites using styled-components. It simplifies the process of animating sprites by providing a convenient interface to define sprite properties and animations.

DEMOS: [https://react-spriter.callumeddisford.co.uk/](https://react-spriter.callumeddisford.co.uk/)

# Features
- Pause and play sprite
- Change sprite layer

# Installation
To use ReactSpriter in your React project, you can install it via npm or yarn:

```shell
npm install react-spriter
```

or

```shell
yarn add react-spriter
```

# Usage
1. Import ReactSpriter into your component:
```jsx
import ReactSpriter from "react-spriter";
```
2. Use ReactSpriter in your component's render method:
```jsx
class MyComponent extends React.Component {
  render() {
    return (
      <ReactSpriter
        sprite={sprite}
        frameWidth={frameWidth}
        frameHeight={frameHeight}
        spriteWidth={spriteWidth}
        duration={animationDuration}
        isInfinite={isInfinite}
        shouldAnimate={shouldAnimate}
        layer={layer}
      />
    );
  }
}
```

# Props
| Field             | Type    | Description                                                                                                                                       |
|-------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| sprite            | string  | The URL of the sprite image.                                                                                                                      |
| frameWidth        | number  | The width of each frame in the sprite.                                                                                                            |
| frameHeight       | number  | The height of each frame in the sprite.                                                                                                           |
| spriteWidth       | number  | The total width of the sprite image.                                                                                                              |
| animationDuration | number  | The duration of the animation in milliseconds.                                                                                                    |
| isInfinite        | boolean | Whether the animation should loop infinitely.                                                                                                     |
| shouldAnimate     | boolean | (optional) Whether the animation should start automatically. Defaults to true.                                                                    |
| layer             | number  | (optional) The layer of the sprite animation. If multiple sprites are layered on top of each other, this value determines the order of rendering. |

# Examples
Here's an example of how you can use ReactSpriter to animate a sprite, in this example each frame width is `64` and the total sprite image width is `512` this indicates there are `8` frames to animate over:

```jsx
import React from "react";
import ReactSpriter from "react-spriter";
import sprite from "path/to/sprite.png";

const MyComponent = () => {
  const frameWidth = 64;
  const frameHeight = 64;
  const spriteWidth = 512;
  const animationDuration = 1000;
  const isInfinite = true;
  const shouldAnimate = true;
  const layer = 0;

  return (
    <ReactSpriter
      sprite={sprite}
      frameWidth={frameWidth}
      frameHeight={frameHeight}
      spriteWidth={spriteWidth}
      duration={animationDuration}
      isInfinite={isInfinite}
      shouldAnimate={shouldAnimate}
      layer={layer}
    />
  );
};

export default MyComponent;
```

Please check out the `src/examples` directory for more

# Local development
To start storybook locally:

```shell
  npm install
  npm run storybook
```
