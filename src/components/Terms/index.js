import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

const Terms = ({ text }) => (
  <Text style={styles.copy}>
    {text}
  </Text>
)

const styles = StyleSheet.create({
  copy: {
    fontSize: 18,
    fontWeight: '400',
  }
});

export default Terms;
