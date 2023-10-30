import { StatusBar } from 'expo-status-bar';
import {Text, View ,Image, Pressable} from 'react-native';
import moment from 'moment/moment';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Period} from './Data';
import {Home} from './Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions =
    {{cardStyle: {backgroundColor: 'blue'}}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
    </Stack.Navigator>
    </NavigationContainer>
  );}
