import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Pressable,} from 'react-native';
import moment from 'moment/moment';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Period from './Period';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
      
  
    </NavigationContainer>
  );

}

const Home = ({navigation}) => {

  var date = moment().utcOffset('+5:30').format('YYYY-MM-DD hh:mm:ss a');

  var per1 = new Period(["1st"],["8:35"],["9:27"]);
  var per2 = new Period(["2nd"],["9:32"], ["10:25"])
  
  var per1Array = per1.getTime();

  var startValue = Object.values(per1.getStart());


  return (
    <View style={styles.container}>
    <Text> {per1.getPeriodNumber()} </Text>
      <Text style ={textStyles}> Welcome to the MoHi Schedule App!</Text>
      <Text style = {styles}> {per1.getPeriodNumber()} Period {'\n'} 
      Time: {per1.getTime()} </Text>
      <Text style = {styles}> {per2.getPeriodNumber()} Period {'\n'} 
      Time: {per2.getTime()} </Text>
      

      <Text style = {textStyles}> Today's Date: {date} </Text>

      <Pressable onPress={() => navigation.navigate('Info', {name: 'Info'})}>

      <Image style = {styles.image} source={require("./assets/info.png")}  />
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );

};

const Info = ({navigation}) => {

  return(
    <View style= {styles.container}>
      <Text onPress ={() => navigation.navigate('Home',{name: 'Home'})}style = {textStyles}> Test Screen </Text>
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
      left: -180,
      top: -350,
  }
});
