import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Box } from '@millionscard/cash';

const Divider = styled(Box)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

const HorizontalLine = styled(Box)(({ theme }) => ({
  backgroundColor: theme.colors.black[50],
  flexGrow: 1,
  height: '1px',
}));

const TextDivider = ({ children, ...props }) => {
  return (
    <Divider {...props}>
      <HorizontalLine mr="12px" />
      {children}
      <HorizontalLine ml="12px" />
    </Divider>
  );
};

TextDivider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextDivider;
