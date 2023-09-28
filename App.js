import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Pressable,} from 'react-native';
import moment from 'moment/moment';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Period} from './Data';


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
  
  const per1 = Period("1st", "8:35", "9:27");
  const per2 = Period("2nd", "9:32", "10:25");
  const schedule = [per1, per2];

  return (
    <View style={styles.container}>
    
      <Text style ={textStyles}> Welcome to the MoHi Schedule App!</Text>
      
      {schedule.map(period=>{
      return(
        <Text key = {period.periodNumber} style = {styles}> 
        {period.periodNumber} Period {'\n'} 
        Time: {period.startTime} - {period.endTime} 
        </Text>
      )})}
      

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
