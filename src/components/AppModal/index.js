import React from "react";
import { Modal } from "react-native";

import AppButton from 'app/components/AppButton';

const AppModal = ({ modalVisible, handleModalClose, children }) => (
  <Modal
    animationType="slide"
    visible={modalVisible}
    onRequestClose={() => handleModalClose}
  >
    {children}
  </Modal>
)

export default AppModal;