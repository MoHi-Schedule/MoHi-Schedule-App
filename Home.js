import {Period, PeriodBox, currentDay, getSchedule, isCurrentPeriod} from './Data'
import moment from 'moment/moment';
import { ScrollView, StyleSheet, Text, View ,Image, Pressable,} from 'react-native';

export const Home = ({navigation}) => {
  const day = currentDay();
  const schedule = getSchedule();
    return(
    <ScrollView style = {styles.background}>
        <View style = {styles.image}>

          <Pressable onPress={() => navigation.navigate('TimeLeft', {name: 'TimeLeft'})}>
           <Image style = {styles.image} source={require("./assets/info.png")}  />
          </Pressable>

        </View>
        <View style = {styles.headerBox}>
          <Text style = {styles.headerText}>
            Monarch Highschool Schedule
          </Text>
        </View>

        <View style = {styles.dateBox}>
          <Text style = {styles.dayText}>
            {day}
          </Text>
        </View>

    {schedule.map(per =>{
        return(
          //assign PeriodBox values
          <PeriodBox 
          currentPeriod = {isCurrentPeriod(per.periodNumber)}
          periodNumber = {per.periodNumber} 
          startHour = {per.startHour} 
          startMin = {per.startMin}
          endHour = {per.endHour}       
          endMin = {per.endMin}
          /> 
        )})}
 
 
    </ScrollView>


    )   


}

const styles = StyleSheet.create({ 
  background: {
    backgroundColor: '#333333',
    paddingTop: 10,
  },
  headerBox: {
    width: 370,
    height: 50,
    backgroundColor: '#DCCD98',
    justifyContent: 'center',
    top: 50,
    borderRadius: 15,
    left: 10,
    right: 10,
  },
  headerText: {
    fontFamily: 'Arial',
    fontSize: 20, 
    textAlign: 'center',
  },
  dateBox: {
    top: 60,
  },
  dayText: {
    color: '#FFFFFF',
    fontFamily: 'Arial',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
  },
  image: {
    width : 50, 
    height: 50,
    position: 'absolute',
    top : 370,  
    right : 150,
    left : 150,
  }
})