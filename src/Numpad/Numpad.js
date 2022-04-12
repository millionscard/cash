import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Box from '../Box';
import Heading from '../Heading';
import Icon from '../Icon';

const KEYBOARD_BUTTON_SIZE = 80;

const KeyboardButton = styled.Pressable({
  width: KEYBOARD_BUTTON_SIZE,
  height: KEYBOARD_BUTTON_SIZE,
  alignItems: 'center',
  justifyContent: 'center',
});

const KeyboardButtonText = styled.Text.attrs({ allowFontScaling: false })(({ theme }) => ({
  color: theme.colors.black[500],
  fontFamily: theme.fonts.FuturaPT.bold,
  fontSize: '24px',
  textAlign: 'center',
}));

const KeyboardRow = styled(Box).attrs({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})({
  width: '100%',
});

const Numpad = ({ onPress, decimal, ...props }) => {
  const renderCell = useCallback(
    symbol => (
      <KeyboardButton
        key={symbol}
        onPress={() => onPress(symbol.toString())}
        testID={`numpad-button-${symbol}`}
      >
        <KeyboardButtonText>{symbol}</KeyboardButtonText>
      </KeyboardButton>
    ),
    [onPress]
  );

  const renderRow = useCallback(
    cells => <KeyboardRow>{cells.map(renderCell)}</KeyboardRow>,
    [renderCell]
  );

  return (
    <Box {...props}>
      {renderRow([1, 2, 3])}
      {renderRow([4, 5, 6])}
      {renderRow([7, 8, 9])}
      <KeyboardRow>
        {decimal ? renderCell('.') : <Box width={KEYBOARD_BUTTON_SIZE} />}
        {renderCell(0)}
        <KeyboardButton onPress={() => onPress('back')}>
          <Icon name="Backspace" width="20" height="14" />
        </KeyboardButton>
      </KeyboardRow>
    </Box>
  );
};

Numpad.propTypes = {
  onPress: PropTypes.func,
  /** Renders an additional period button to support decimal input */
  decimal: PropTypes.bool,
};

Numpad.defaultProps = {
  onPress: () => {},
  decimal: true,
};

export default Numpad;
