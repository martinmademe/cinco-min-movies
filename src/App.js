import 'react-native-gesture-handler';
import React from 'react';
import Router from 'app/navigators'
import AppProvider from 'app/store'

const App = () => (
  <AppProvider>
    <Router />
  </AppProvider>
);

export default App;
