import {PeriodBox, currentDay, isCurrentPeriod} from './Data'
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

    {/*adds a button to navigate to TimeLeft screen*/}
          <Pressable onPress={() => navigation.navigate('TimeLeft', {name: 'TimeLeft'})}>
           <Image style = {styles.image} source={require("./assets/info.png")}  />
          </Pressable>

    {/*display for the header box and header text at the top of the screen*/}
        </View>
        <View style = {styles.headerBox}>
          <Text style = {styles.headerText}>
            Monarch High School Schedule
          </Text>
        </View>
    {/*displays the current day under the header box*/}
        <View style = {styles.dateBox}>
          <Text style = {styles.dayText}>
            {day}
          </Text>
        </View>

    {/*maps through the schedule and creates a view for each period using PeriodBox component*/}
    {schedule.map(per =>{
        return(
          //assign PeriodBox values
          <PeriodBox 
          currentPeriod = {isCurrentPeriod(per.periodNumber, schedule)}
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