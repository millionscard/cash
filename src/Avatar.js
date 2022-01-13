import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { variant } from 'styled-system';

const sizeVariants = variant({
  prop: 'size',
  variants: {
    sm: { width: '24px', height: '24px' },
    md: { width: '36px', height: '36px' },
    lg: { width: '48px', height: '48px' },
    xl: { width: '96px', height: '96px' },
  },
});

const StyledImage = styled.Image`
  border-radius: ${props => props.theme.radii.full};
  ${sizeVariants}
`;

const Avatar = ({ size, src }) => {
  return <StyledImage size={size} source={src} />;
};

Avatar.propTypes = {
  src: PropTypes.object,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};

Avatar.defaultProps = {
  size: 'md',
};

export default Avatar;
