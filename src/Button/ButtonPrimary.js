import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ButtonBase from './ButtonBase';
import Box from '../Box';

const ButtonPrimary = ({ children, ...props }) => {
  console.log({ props });

  return (
    <ButtonBase {...props}>
      <LinearGradient
        colors={['#a45dff', '#712acc']}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        style={{ borderRadius: 45 }}
      >
        <Box
          m={1}
          py={18}
          px={32}
          alignItems="center"
          _text={props._text}
          bg="#8D34FF"
          borderRadius={45}
        >
          {children}
        </Box>
      </LinearGradient>
    </ButtonBase>
  );
};

ButtonPrimary.defaultProps = {
  p: 0,
  _text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
};

export default ButtonPrimary;
