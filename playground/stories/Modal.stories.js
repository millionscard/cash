import React, { useState } from 'react';
import * as Cash from '@cash';

export default () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Cash.ButtonPrimary size="md" onPress={toggleModal}>
        Show modal
      </Cash.ButtonPrimary>

      <Cash.Modal isVisible={isModalVisible} onClose={toggleModal}>
        <Cash.Heading fontSize="2xl" mb="2">
          A million ways to win!
        </Cash.Heading>
        <Cash.Text color="black.300" fontSize="md" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna.
        </Cash.Text>
        <Cash.ButtonOutline size="md" onPress={toggleModal} mt="4" isFullWidth>
          Hide modal
        </Cash.ButtonOutline>
      </Cash.Modal>
    </>
  );
};
