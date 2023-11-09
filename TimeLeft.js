import {styles} from './components/stylesheets'
import * as React from 'react';
import {currentPeriodNumber, getSchedule} from './Data';
import {Text, View ,Image, Pressable, ScrollView} from 'react-native';

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
  <ScrollView style = {styles.background}>
  
    <Text style = {styles.headerText}> The Current Period is {currentPeriod} </Text>
    <Text style = {styles.headerText}> {endTime - currentTime} Minutes Left</Text>
    

    <Pressable onPress={() => navigation.navigate('Home', {name: 'Home'})}>
      <Image style = {styles.image} source={require("./assets/info.png")}  />
    </Pressable>
  </ScrollView>
)}
  else
  {
    return(  
    <ScrollView style = {styles.background}>
      <Text style = {styles.headerText}> Not currently school hours!</Text>
      <Pressable onPress={() => navigation.navigate('Home', {name: 'Home'})}>
        <Image style = {styles.image} source={require("./assets/info.png")}  />
      </Pressable>
    </ScrollView>
    )
  }
}