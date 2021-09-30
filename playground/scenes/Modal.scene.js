import React, { useState } from 'react';
import { ButtonPrimary, Text, Heading, Modal } from '@cash';

function ModalScene() {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <ButtonPrimary onPress={toggleModal}>Show modal</ButtonPrimary>

      <Modal isVisible={isModalVisible} onClose={toggleModal}>
        <Heading fontSize="2xl" mb="2">
          A million ways to win!
        </Heading>
        <Text color="black.300" fontSize="md" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna.
        </Text>
        <ButtonPrimary onPress={toggleModal} mt="4">
          Hide modal
        </ButtonPrimary>
      </Modal>
    </>
  );
}

export default ModalScene;
