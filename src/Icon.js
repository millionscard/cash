import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from 'react-native-svg-icon';
import { Path } from 'react-native-svg';

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }
const svgs = {
  // SortArrows: (
  //   <G>
  //     <Path d="M0 45h90L45 0 0 45z" />
  //     <Path d="M0 55h90l-45 45L0 55z" />
  //   </G>
  // ),
  LeftArrow: {
    svg: (
      <Path d="M11 6H3.41002L6.71002 2.71C6.89832 2.5217 7.00411 2.2663 7.00411 2C7.00411 1.7337 6.89832 1.47831 6.71002 1.29C6.52172 1.1017 6.26632 0.995911 6.00002 0.995911C5.73372 0.995911 5.47832 1.1017 5.29002 1.29L0.290018 6.29C0.198978 6.38511 0.127613 6.49725 0.0800184 6.62C-0.0199996 6.86346 -0.0199996 7.13654 0.0800184 7.38C0.127613 7.50275 0.198978 7.6149 0.290018 7.71L5.29002 12.71C5.38298 12.8037 5.49358 12.8781 5.61544 12.9289C5.7373 12.9797 5.86801 13.0058 6.00002 13.0058C6.13203 13.0058 6.26274 12.9797 6.3846 12.9289C6.50645 12.8781 6.61706 12.8037 6.71002 12.71C6.80375 12.617 6.87814 12.5064 6.92891 12.3846C6.97968 12.2627 7.00582 12.132 7.00582 12C7.00582 11.868 6.97968 11.7373 6.92891 11.6154C6.87814 11.4936 6.80375 11.383 6.71002 11.29L3.41002 8H11C11.2652 8 11.5196 7.89465 11.7071 7.70711C11.8947 7.51957 12 7.26522 12 7C12 6.73479 11.8947 6.48043 11.7071 6.2929C11.5196 6.10536 11.2652 6 11 6Z" />
    ),
    viewBox: '0 0 12 14',
  },
  RightArrow: {
    svg: (
      <Path d="M12.42 6.62C12.3724 6.49725 12.301 6.3851 12.21 6.29L7.21 1.29C7.11676 1.19676 7.00607 1.1228 6.88425 1.07234C6.76243 1.02188 6.63186 0.995907 6.5 0.995907C6.2337 0.995907 5.9783 1.10169 5.79 1.29C5.69676 1.38324 5.6228 1.49393 5.57234 1.61575C5.52188 1.73757 5.49591 1.86814 5.49591 2C5.49591 2.2663 5.6017 2.52169 5.79 2.71L9.09 6H1.5C1.23478 6 0.98043 6.10536 0.792893 6.29289C0.605357 6.48043 0.5 6.73478 0.5 7C0.5 7.26521 0.605357 7.51957 0.792893 7.70711C0.98043 7.89464 1.23478 8 1.5 8H9.09L5.79 11.29C5.69627 11.383 5.62188 11.4936 5.57111 11.6154C5.52034 11.7373 5.4942 11.868 5.4942 12C5.4942 12.132 5.52034 12.2627 5.57111 12.3846C5.62188 12.5064 5.69627 12.617 5.79 12.71C5.88296 12.8037 5.99356 12.8781 6.11542 12.9289C6.23728 12.9797 6.36799 13.0058 6.5 13.0058C6.63201 13.0058 6.76272 12.9797 6.88458 12.9289C7.00644 12.8781 7.11704 12.8037 7.21 12.71L12.21 7.71C12.301 7.61489 12.3724 7.50275 12.42 7.38C12.52 7.13654 12.52 6.86346 12.42 6.62Z" />
    ),
    viewBox: '0 0 13 14',
  },
};

const Icon = ({ color, ...props }) => <SvgIcon {...props} fill={color} svgs={svgs} />;

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  width: '12',
  height: '12',
};

export default Icon;
