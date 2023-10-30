import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Pressable,} from 'react-native';
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
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
    </Stack.Navigator>
    </NavigationContainer>
  );

}



const textStyles = {color : '#FFD700'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  setColor:{
    color: '#FFD700',
  },
  image:{
    width : 50, 
    height: 50,
    position: 'absolute',
      left: -180,
      top: -350,
  }
});
