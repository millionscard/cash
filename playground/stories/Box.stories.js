import React from 'react';
import * as Cash from '@cash';

export default () => {
  const { gradients } = Cash.useTheme();

  return (
    <Cash.Stack direction="column" gap="20px">
      <Cash.Box bg="black.10" p={3} _text={{ color: 'black.300' }} sx={{ bg: 'purple.100' }}>
        Box
      </Cash.Box>
      <Cash.Box
        shadow="md"
        bg="white"
        borderBottomLeftRadius="md"
        borderBottomRightRadius="md"
        p={3}
      >
        Box with shadow
      </Cash.Box>
      <Cash.Box bgGradient={gradients.purple} p={3} _text={{ color: 'white' }}>
        Box with bgGradient
      </Cash.Box>
      <Cash.Box bgGradient={gradients.pink} p={3} _text={{ color: 'white' }} borderRadius="md">
        Box rounded with bgGradient
      </Cash.Box>
      <Cash.Box
        bgGradient={gradients.pink}
        p={3}
        _text={{ color: 'white' }}
        borderTopLeftRadius="md"
        borderBottomRightRadius="md"
      >
        Box partly rounded with bgGradient
      </Cash.Box>
    </Cash.Stack>
  );
};
