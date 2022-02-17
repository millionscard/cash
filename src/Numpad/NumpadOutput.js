import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const OutputValue = styled.Text(({ theme }) => ({
  ...theme.fonts.FuturaPT.demi,
  fontSize: '60px',
  textAlign: 'center',
}));

const NumpadOutput = ({ value }) => {
  return <OutputValue numberOfLines={1}>{value ? value : '0'}</OutputValue>;
};

NumpadOutput.propTypes = {
  value: PropTypes.string,
};

export default React.memo(NumpadOutput);
