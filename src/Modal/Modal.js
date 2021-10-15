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
  /** Set whether or not the modal is shown */
  isOpen: PropTypes.bool,
  /** A user-provided function that should close the modal */
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
