import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const AppButton = ({ title, onPress }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.text,
      color: colors.background,
      width: '100%',
      paddingVertical: 16,
      borderRadius: 4,
      alignSelf: 'flex-end'
    },
    buttton__text: {
      color: colors.background,
      textAlign: 'center'
    }
  });

  return (
    <TouchableOpacity
      testID={'button'}
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.buttton__text} >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default AppButton;
