import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Home} from './components/Home';
import {TimeLeft} from './components/TimeLeft';
import {getSchedule} from './Data/Data';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const schedules = getSchedule();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );}
