import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import ButtonBase from './ButtonBase';
import Box from '@cash/Box';

const colorSchemes = {
  purple: {
    gradient: ['#8D34FF', '#5C00D0'],
    color: 'white',
  },
  gold: {
    gradient: ['#FFDF32', '#FC8D39'],
    color: '#996E00',
    textShadow: '0px 2px 0px rgba(255, 255, 255, 0.35)',
  },
  green: {
    gradient: ['#4EDB86', '#1BA853'],
    color: 'white',
  },
};

const ButtonPrimary = ({ children, colorScheme, ...props }) => {
  const resolvedColorScheme = colorSchemes?.[colorScheme];

  // TODO: Refactor
  // Pass margin props to ButtonBase to be able to add spacing
  const { m, mt, mr, mb, ml, mx, my, _text, ...resolvedProps } = props;
  const marginProps = { m, mx, my, mt, mr, mb, ml };
  const textProps = {
    _text: {
      ..._text,
      color: resolvedColorScheme.color,
      textShadow: resolvedColorScheme.textShadow,
    },
  };

  return (
    <ButtonBase {...marginProps}>
      <LinearGradient colors={resolvedColorScheme.gradient} style={{ borderRadius: 45 }}>
        <LinearGradient colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0)']}>
          <LinearGradient
            colors={resolvedColorScheme.gradient}
            style={{ borderRadius: 45, margin: 3 }}
          >
            <Box {...resolvedProps} {...textProps}>
              {children}
            </Box>
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
    fontFamily: 'button',
    fontWeight: 'bold',
    fontSize: 'xl',
  },
};

export default ButtonPrimary;
