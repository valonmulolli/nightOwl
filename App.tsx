/* eslint-disable */
import { View, Text } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Setting from './src/screens/Setting';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Setting />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
