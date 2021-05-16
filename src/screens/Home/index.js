import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Layout from 'app/components/Layout'

const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColorStyle = isDarkMode ? Colors.light : Colors.dark

  return (
    <Layout>
      <Text style={[styles.copy, { color: textColorStyle }]}>
        Home Screen
      </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
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

export default HomeScreen;
