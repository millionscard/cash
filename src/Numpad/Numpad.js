import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Box from '../Box';
import Stack from '../Stack';
import Icon from '../Icon';
import theme from '../theme';

const KEYBOARD_BUTTON_HEIGHT = 48;
const KEYBOARD_BUTTON_GAP = '5px';

const KeyboardButton = styled.Pressable.attrs({ accessibilityRole: 'keyboardkey' })(
  ({ theme }) => ({
    flex: 1,
    height: KEYBOARD_BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.black['5'],
    borderRadius: '4px',
  })
);

const KeyboardButtonText = styled.Text.attrs({ allowFontScaling: false })(({ theme }) => ({
  color: theme.colors.black[500],
  fontFamily: theme.fonts.FuturaPT.bold,
  fontSize: '24px',
  textAlign: 'center',
}));

const KeyboardRow = styled(Stack).attrs({
  direction: 'row',
  gap: KEYBOARD_BUTTON_GAP,
})({
  width: '100%',
});

const Numpad = ({ onPress, decimal, ...props }) => {
  const renderCell = useCallback(
    (symbol, buttonProps = {}) => (
      <KeyboardButton
        key={symbol}
        onPress={() => onPress(symbol.toString())}
        testID={`numpad-button-${symbol}`}
        {...buttonProps}
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
    <Stack direction="column" gap={KEYBOARD_BUTTON_GAP} {...props}>
      {renderRow([1, 2, 3])}
      {renderRow([4, 5, 6])}
      {renderRow([7, 8, 9])}
      <KeyboardRow>
        {decimal ? (
          renderCell('.', { testID: 'numpad-button-period', accessibilityLabel: 'Period' })
        ) : (
          <Box flex={1} />
        )}
        {renderCell(0)}
        <KeyboardButton
          onPress={() => onPress('back')}
          testID="numpad-button-backspace"
          accessibilityLabel="Backspace"
          accessibilityHint="Delete the last digit"
        >
          <Icon name="Backspace" width="20" height="14" />
        </KeyboardButton>
      </KeyboardRow>
    </Stack>
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
