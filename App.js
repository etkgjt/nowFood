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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import UserProfile from './Screen/UserProfile';
import Saved from './Screen/Saved';
const Tab = createBottomTabNavigator();
const App = () =>
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}></Tab.Screen>
      <Tab.Screen name='Saved' component={Saved}></Tab.Screen>
      <Tab.Screen name='UserProfile' component={UserProfile}></Tab.Screen>

    </Tab.Navigator>
  </NavigationContainer>




export default App;
