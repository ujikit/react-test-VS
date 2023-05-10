/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Test from './src/screens/Test/';

const App = () => {
  return (
    <SafeAreaProvider>
      <Test />
    </SafeAreaProvider>
  );
};

export default App;
