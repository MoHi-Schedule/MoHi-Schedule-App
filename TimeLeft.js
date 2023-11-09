import {styles} from './components/stylesheets'
import * as React from 'react';
import {currentPeriodNumber, getSchedule} from './Data';
import {Text, View ,Image, Pressable} from 'react-native';

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