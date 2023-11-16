import {styles} from './components/stylesheets'
import * as React from 'react';
import {currentPeriodNumber, } from './Data';
import {Text,Image, Pressable, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native'


export const TimeLeft = (props) => {
  const navigation = useNavigation();
  let schedule = props.schedule;
  const currentPeriod = currentPeriodNumber();
  //checks if there is a current period, if there is calculate how much time is remaining and show that in a view
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
//if there isn't a current period return a different view
  else
  {
    return(  
    <ScrollView style = {styles.background}>
      <Text style = {styles.headerText}> Not currently school hours!</Text>
      <Pressable onPress={() => props.navigate('Home', {name: 'Home'})}>
        <Image style = {styles.image} source={require("./assets/info.png")}  />
      </Pressable>
    </ScrollView>
    )
  }
}