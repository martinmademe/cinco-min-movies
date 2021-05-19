import React from 'react';
import { useColorScheme } from 'react-native';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

const Layout = ({ children }) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const statusBarStyle = scheme === 'dark'
    ? 'dark-content'
    : 'light-content'

  return (
    <SafeAreaView style={colors.background}>
      <StatusBar barStyle={statusBarStyle} />
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: '100%',
    alignItems: 'center',
  },
});

export default Layout;
