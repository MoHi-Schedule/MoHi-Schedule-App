import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Home} from './Home';
import {TimeLeft} from './TimeLeft';
import {getSchedule} from './Data';
const schedules = getSchedule();
const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions =
    {{headerShown: false}}
>
        <Stack.Screen
          name="Home"
        >
        {(props) => <Home {...props} schedule = {schedules}/>}
        </Stack.Screen>
        
        <Stack.Screen
          name="TimeLeft"
        >
        {(props) => <TimeLeft {...props} schedule = {schedules}/>}
        </Stack.Screen>

    </Stack.Navigator>
    </NavigationContainer>
  );}
