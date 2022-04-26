import React from 'react';
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';

const CheckboxChecked = props => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 4a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H4a4 4 0 01-4-4V4z"
        fill="url(#paint0_linear_1011_3339)"
      />
      <G filter="url(#filter0_d_1011_3339)">
        <Path
          d="M15.592 6.008a.834.834 0 00-1.184 0L8.2 12.225 5.592 9.608a.852.852 0 00-1.184 1.225l3.2 3.2a.833.833 0 001.184 0l6.8-6.8a.833.833 0 000-1.225z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1011_3339"
          x1={10.0192}
          y1={0}
          x2={10.0192}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1AE66A" />
          <Stop offset={1} stopColor="#00993D" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default CheckboxChecked;
