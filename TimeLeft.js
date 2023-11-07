import { StatusBar } from 'expo-status-bar';
import moment from 'moment/moment';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Period,SplitEndCreate,currentPeriodNumber, getSchedule} from './Data';
import {Home} from './Home';
import { ScrollView, StyleSheet, Text, View ,Image, Pressable} from 'react-native';

export const TimeLeft = ({navigation}) => {
  let schedule = getSchedule();
  const currentPeriod = currentPeriodNumber();
  if(currentPeriod != null)
    {
      const hours = new Date().getHours() % 12; 
      const min = new Date().getMinutes(); 
      const endTime = schedule[4][currentPeriod-1] * 60 + schedule[5][currentPeriod-1]
      var currentTime = (hours * 60) + min;
      
return (
  <View style = {styles.background}>
  
    <Text style = {styles.dayText}> The Current Period is {currentPeriod} </Text>
    <Text style = {styles.dayText}> {endTime - currentTime} Minutes Left</Text>
    

    <Pressable onPress={() => navigation.navigate('Home', {name: 'Home'})}>
      <Image style = {styles.image} source={require("./assets/info.png")}  />
    </Pressable>
  </View>
)}
  else
  {
    return(  
    <View style = {styles.background}>
  
      <Text style = {styles.dayText}> Not currently school hours!</Text>
      <Pressable onPress={() => navigation.navigate('Home', {name: 'Home'})}>
        <Image style = {styles.image} source={require("./assets/info.png")}  />
      </Pressable>
    </View>)
  }
}

const styles = StyleSheet.create({ 
  background:{
    backgroundColor: '#333333',
    paddingTop: 10,
  },
  image:{
    width : 50, 
    height: 50,
    position: 'absolute',
    left: 150,
    right: 150,
    top: 370,
  },
  dayText: {
    top : 50,
    textAlign :'center',
    color: '#000000',
    fontFamily: 'Arial',
    fontSize: 25,
},
})