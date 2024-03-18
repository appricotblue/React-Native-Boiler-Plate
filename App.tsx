import React from 'react';
import { Dimensions} from 'react-native';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authstack from './src/Routes/Authstack';
const Stack = createStackNavigator();



const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const App = () => {
  return (
      <NavigationContainer>
      <Authstack/>
      </NavigationContainer>
  );
};

export default App;
