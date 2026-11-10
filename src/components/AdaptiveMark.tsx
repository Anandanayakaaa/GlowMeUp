import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

export function AdaptiveMark({ size = 48, color = "#32132F" }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <Path
        d="M17 10C27 4 38 8 42 16C46 24 40 31 31 35C22 39 18 45 20 54C11 50 7 43 8 34C9 24 11 14 17 10Z"
        fill={color}
      />
      <Path
        d="M47 54C37 60 26 56 22 48C18 40 24 33 33 29C42 25 46 19 44 10C53 14 57 21 56 30C55 40 53 50 47 54Z"
        fill={color}
        opacity={0.72}
      />
    </Svg>
  );
}
