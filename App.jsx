import 'react-native-gesture-handler';
import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import RoutesContainer from './src/navigation/RoutesContainer';

const App = () => {
  return (
    <NavigationContainer>
      <RoutesContainer />
    </NavigationContainer>
  );
};

export default App;
