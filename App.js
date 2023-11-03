import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Home} from './Home';
import {TimeLeft} from './TimeLeft';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions =
    {{headerShown: false}}
>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        
        <Stack.Screen
          name="TimeLeft"
          component={TimeLeft}
        />

    </Stack.Navigator>
    </NavigationContainer>
  );}
