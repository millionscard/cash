import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { css } from 'styled-components';
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

const withBorderStyles = css`
  border-width: 3px;
  border-color: ${({ borderColor }) => borderColor};
`;

const StyledImage = styled.Image`
  border-radius: ${props => props.theme.radii.full};
  ${({ showBorder }) => showBorder && withBorderStyles}
  ${sizeVariants}
`;

const Avatar = ({ src, ...props }) => {
  return <StyledImage source={src} {...props} />;
};

Avatar.propTypes = {
  src: PropTypes.object,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  showBorder: PropTypes.bool,
  borderColor: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'md',
  showBorder: false,
  borderColor: 'black',
};

export default Avatar;
