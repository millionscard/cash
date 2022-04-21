import React from 'react';
import Svg, { Rect, G, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

const RadioChecked = props => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={20} height={20} rx={10} fill="url(#paint0_linear_1011_3343)" />
      <G filter="url(#filter0_d_1011_3343)">
        <Circle cx={10} cy={10} r={5} fill="#fff" />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1011_3343"
          x1={10.0192}
          y1={0}
          x2={10.0192}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8D34FF" />
          <Stop offset={1} stopColor="#3600CC" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default RadioChecked;
