import React from 'react';
import PropTypes from 'prop-types';
import RNModal from 'react-native-modal';
import Card from '../Card';

const Modal = ({ children, isOpen, onClose, ...props }) => {
  return (
    <RNModal isVisible={isOpen} onBackdropPress={onClose} {...props}>
      <Card>{children}</Card>
    </RNModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: true,
};

export default Modal;
