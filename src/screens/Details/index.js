import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Layout from 'app/components/Layout'

const DetailScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColorStyle = isDarkMode ? Colors.light : Colors.dark

  return (
    <Layout>
      <Text style={[styles.copy, { color: textColorStyle }]}>
        Detail Screen
      </Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  copy: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  }
});

export default DetailScreen;
