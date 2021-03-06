import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const RadioUnchecked = props => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} fill="#fff" stroke="#ECECEC" />
    </Svg>
  );
};

export default RadioUnchecked;
