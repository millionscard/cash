import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

const Stack = ({ children, direction, gap, ...props }) => {
  const spacingProps = direction === 'row' ? { width: gap } : { height: gap };

  return (
    <Box flexDirection={direction} {...props}>
      {renderSpacedChildren({ children, spacingProps })}
    </Box>
  );
};

Stack.propTypes = {
  children: PropTypes.node,
  /** a value of `row`, or `column` */
  direction: PropTypes.oneOf(['row', 'column']),
  gap: PropTypes.string,
};
Stack.defaultProps = {
  direction: 'row',
};

function renderSpacedChildren({ children, spacingProps }) {
  const childrenArray = React.Children.toArray(children);
  const childLength = childrenArray.length - 1;
  return childrenArray.map((child, index) => (
    <Fragment key={child.key ?? `spaced-child-${index}`}>
      {child}
      {index < childLength && <Box {...spacingProps} />}
    </Fragment>
  ));
}

export default Stack;
