import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const TextValue = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.FuturaPT.demi,
  fontSize: '60px',
  textAlign: 'center',
}));

const OutputValue = ({ value }) => {
  return <TextValue numberOfLines={1}>{value ? value : '0'}</TextValue>;
};

OutputValue.propTypes = {
  value: PropTypes.string,
};

export default React.memo(OutputValue);
