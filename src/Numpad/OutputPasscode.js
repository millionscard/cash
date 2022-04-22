import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Box from '../Box';

const PasscodeValue = styled(Box)({
  backgroundColor: ({ isEmpty, theme: { colors } }) => (isEmpty ? 'white' : colors.purple['500']),
  borderColor: ({ theme: { colors } }) => colors.purple['200'],
  borderWidth: ({ isEmpty }) => (isEmpty ? '2px' : 0),
  borderRadius: 15,
  width: 15,
  height: 15,
  marginLeft: 10,
  marginRight: 10,
});

const OutputPasscode = ({ value, ...props }) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      accessible={true}
      accessibilityRole="adjustable"
      accessibilityLabel="Passcode"
      accessibilityHint="Enter passcode"
      accessibilityValue={{ text: value }}
      {...props}
    >
      <PasscodeValue isEmpty={!value || !value.length} />
      <PasscodeValue isEmpty={!value || !(value.length > 1)} />
      <PasscodeValue isEmpty={!value || !(value.length > 2)} />
      <PasscodeValue isEmpty={!value || !(value.length > 3)} />
    </Box>
  );
};

OutputPasscode.propTypes = {
  value: PropTypes.string,
};

export default React.memo(OutputPasscode);
