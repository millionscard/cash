import React from 'react';
import RNModal from 'react-native-modal';
import Card from '@cash/Card';

const Modal = ({ children, onClose, ...props }) => {
  return (
    <RNModal isVisible={true} onBackdropPress={onClose} {...props}>
      <Card>{children}</Card>
    </RNModal>
  );
};

export default Modal;
