/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Dashboard from './src/screens/Dashboard';


const App = () => {

  const backgroundStyle = {
    backgroundColor: Colors.black,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
      <Dashboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
