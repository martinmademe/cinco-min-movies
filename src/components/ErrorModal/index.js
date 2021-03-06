import React from 'react';
import { StyleSheet, Modal, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Layout from 'app/components/Layout';
import AppButton from 'app/components/AppButton';

const ErrorModal = ({ modalVisible, handleModalClose, copy }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: colors.background,
    },
    copy: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 32,
    },
  });

  return (
    <Modal animationType="slide" visible={modalVisible} onRequestClose={handleModalClose} testID="error">
      <Layout>
        <View style={styles.container}>
          <Text style={styles.copy}>{copy}</Text>
        </View>
        <AppButton title={'CLOSE'} onPress={handleModalClose} />
      </Layout>
    </Modal>
  );
};

export default ErrorModal;
