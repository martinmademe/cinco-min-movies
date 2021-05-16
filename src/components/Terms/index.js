import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Terms = ({ text }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColorStyle = isDarkMode ? Colors.light : Colors.dark

  return (
    <Text style={[styles.copy, { color: textColorStyle }]}>
      {text}
    </Text>)
};

const styles = StyleSheet.create({
  copy: {
    fontSize: 18,
    fontWeight: '400',
  }
});

export default Terms;
