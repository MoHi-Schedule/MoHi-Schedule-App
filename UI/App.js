import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {getSchedule} from './Data';
import {Home} from './Home';
import {TimeLeft} from './TimeLeft';

const Stack = createNativeStackNavigator();
const schedule = getSchedule();
export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions =
    {{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={schedule}
        />
        
        <Stack.Screen
          name="TimeLeft"
          component={TimeLeft}
          initialParams={{schedule}}
        />

    </Stack.Navigator>
    </NavigationContainer>
  );}
