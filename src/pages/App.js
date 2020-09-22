/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ROUTENAME from '../route'
import TemplatePage from './TemplatePage'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTENAME.MAIN} component={TemplatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
