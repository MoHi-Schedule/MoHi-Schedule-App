import {PeriodBox, currentDay, getSchedule, isCurrentPeriod} from './Data'
import {styles} from './components/stylesheets'
import {ScrollView, Text, View ,Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'


export const Home = (props) => {
  const day = currentDay();
  const navigation = useNavigation();
  const schedule = props.schedule;
    return(
    <ScrollView style = {styles.background}>
        <View style = {styles.image}>

          <Pressable onPress={() => navigation.navigate('TimeLeft', {name: 'TimeLeft'})}>
           <Image style = {styles.image} source={require("./assets/info.png")}  />
          </Pressable>

        </View>
        <View style = {styles.headerBox}>
          <Text style = {styles.headerText}>
            Monarch High School Schedule
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