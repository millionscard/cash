import styled from 'styled-components/native';
import Box from '../Box';

const StyledPressable = styled.Pressable``;

const ButtonBase = ({ children, ...props }) => {
  return (
    <StyledPressable>
      {children ? (
        <Box bg="transparent" {...props}>
          {children}
        </Box>
      ) : null}
    </StyledPressable>
  );
};

export default ButtonBase;
