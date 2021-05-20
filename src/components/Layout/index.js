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

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flexGrow: 1,
      height: '100%',
      alignItems: 'center',
      padding: 16
    },
  });

  return (
    <SafeAreaView>
      <StatusBar barStyle={statusBarStyle} />
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Layout;
