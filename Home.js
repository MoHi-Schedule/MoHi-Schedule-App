import {Period, PeriodBox, currentDay} from './Data'
import moment from 'moment/moment';
import { ScrollView, StyleSheet, Text, View ,Image, Pressable,} from 'react-native';

export const Home = () => {
    //hardcoding all 7 period variables
  const per1 = Period("1st", "8:35", "9:27");
  const per2 = Period("2nd", "9:32", "10:24");
  const per3 = Period("3rd", "10:29", "11:27");
  const per4 = Period("4th", "12:12", "1:04");
  const per5 = Period("5th", "1:09", "2:01");
  const per6 = Period("6th", "2:06", "2:58");
  const per7 = Period("7th", "3:03", "3:55");
   //create an array "schedule" that contains 7 periods
  const schedule = [per1, per2, per3, per4, per5, per6, per7];
  const day = currentDay();
    return(
    <ScrollView style = {styles.background}>
    
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
          isPeriod = {per.currentPeriod}
          period = {per.periodNumber} 
          start = {per.startTime} 
          end = {per.endTime}       
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
}
})