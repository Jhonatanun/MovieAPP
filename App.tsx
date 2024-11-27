/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
}

export default App;

