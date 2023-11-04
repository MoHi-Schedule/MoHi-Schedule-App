import { StatusBar } from 'expo-status-bar';
import moment from 'moment/moment';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Period,SplitEndCreate,currentPeriodChecker} from './Data';
import {Home} from './Home';
import { ScrollView, StyleSheet, Text, View ,Image, Pressable,} from 'react-native';

export const TimeLeft = ({navigation}) => {

  const per1 = Period("1st", "8:35", "9:27");
  const per2 = Period("2nd", "9:32", "10:24");
  const per3 = Period("3rd", "10:29", "11:27");
  const per4 = Period("4th", "12:12", "1:04");
  const per5 = Period("5th", "1:09", "2:01");
  const per6 = Period("6th", "2:06", "2:58");
  const per7 = Period("7th", "3:03", "3:55");

  const schedule = [per1, per2, per3, per4, per5, per6, per7];

  let i = 1;
  let periodNow = 0;
  for(let Period of schedule){
    
    if(Period.currentPeriod){
       periodNow = i;
       break;
    }
    i++;
  }

  let hours = new Date().getHours(); 
  const min = new Date().getMinutes(); 
  //temporary fix to check if there is a current period
  if(periodNow != 0){
  sTime = schedule[periodNow -1].startTime
  eTime = schedule[periodNow -1].endTime

  const splitStart = sTime.split(":");
  const splitEnd = eTime.split(":");
  //fixes abnormal case for when hour changes from 12 to 1
  if(splitStart[0] == 12)
  {splitStart[0] = splitStart[0] - 12}
  if(splitStart[0] == 12 && splitEnd[0] == 12)
  {splitEnd[0] = splitEnd[0] - 12}  
  //end and start are two Numbers that represent start and end time in minutes
  const end = splitEnd[0] * 60 + Number(splitEnd[1])

  if(hours > 12){
    hours -= 12;
  }

  var currentTime = (hours * 60) + min;
return (
  <View>
    <Text style = {styles.dayText}> The Current Period is {periodNow} </Text>

    <Text style = {styles.dayText}> {end - currentTime} Minutes Left</Text>

    <Pressable onPress={() => navigation.navigate('Home', {name: 'Home'})}>
      <Image style = {styles.image} source={require("./assets/info.png")}  />
    </Pressable>
  </View>
)}
//temporary different screen if there is no current period
else
{return (
  <View>
    <Text style = {styles.dayText}> School is done for today </Text>

    <Pressable onPress={() => navigation.navigate('Home', {name: 'Home'})}>
      <Image style = {styles.image} source={require("./assets/info.png")}  />
    </Pressable>
  </View>
)}

}

const styles = StyleSheet.create({ 
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