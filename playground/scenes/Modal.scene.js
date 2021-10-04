import React, { useState } from 'react';
import { ButtonPrimary, ButtonOutline, Text, Heading, Modal } from '@cash';

function ModalScene() {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <ButtonPrimary size="md" onPress={toggleModal}>
        Show modal
      </ButtonPrimary>

      <Modal isVisible={isModalVisible} onClose={toggleModal}>
        <Heading fontSize="2xl" mb="2">
          A million ways to win!
        </Heading>
        <Text color="black.300" fontSize="md" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna.
        </Text>
        <ButtonOutline size="md" onPress={toggleModal} mt="4" isFullWidth>
          Hide modal
        </ButtonOutline>
      </Modal>
    </>
  );
}

export default ModalScene;
