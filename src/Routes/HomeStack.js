import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
if (!__DEV__) {
  console.log = () => null;
}
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="tabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};
export default HomeStack;
