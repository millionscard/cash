import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import ButtonBase from './ButtonBase';
import Box from '../Box';

const colorSchemes = {
  purple: ['#8D34FF', '#5C00D0'],
  gold: ['#FFE970', '#E2A200'],
  green: ['#4EDB86', '#1BA853'],
};

const ButtonPrimary = ({ children, colorScheme, ...props }) => {
  const resolvedColorScheme = colorSchemes?.[colorScheme];

  // TODO: pass margin props to ButtonBase to be able to add spacing

  return (
    <ButtonBase>
      <LinearGradient colors={resolvedColorScheme} style={{ borderRadius: 45 }}>
        <LinearGradient colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0)']}>
          <LinearGradient colors={resolvedColorScheme} style={{ borderRadius: 45, margin: 3 }}>
            <Box {...props}>{children}</Box>
          </LinearGradient>
        </LinearGradient>
      </LinearGradient>
    </ButtonBase>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.node,
  colorScheme: PropTypes.oneOf(Object.keys(colorSchemes)),
};

ButtonPrimary.defaultProps = {
  colorScheme: 'purple',
  px: 32,
  py: 18,
  _text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'semibold',
    fontSize: 'xl',
  },
};

export default ButtonPrimary;
