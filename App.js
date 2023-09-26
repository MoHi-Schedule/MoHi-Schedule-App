import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,} from 'react-native';
import moment from 'moment/moment';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
  

  var date = moment().utcOffset('+5:30').format('YYYY-MM-DD hh:mm:ss a');

  return (

    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Info" component={ProfileScreen} />
      </Stack.Navigator>
      
  
    </NavigationContainer>
  );

}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style ={textStyles}> Welcome to the MoHi Schedule App!</Text>

      
      <Text style = {textStyles}> Today's Date: {date} </Text>
     
      <Image style = {styles.image} source={require("./assets/info.png")} onPress={() => navigation.navigate('ProfileScreen', {name: 'Info'})} />
      <StatusBar style="auto" />
    </View>
  );

};

const ProfileScreen = ({navigation}) => {

  return(
    <View style= {styles.container}>
      <Text style = {textStyles}> Test Screen </Text>
    </View>

  );
};

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
      left: 20,
      top: 50,
      bottom: 0,
      right: 0
  }
});
