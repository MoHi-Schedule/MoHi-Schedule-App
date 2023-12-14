import {currentDay, isCurrentPeriod} from '../Data/Data'
import {styles} from './stylesheets'
import {ScrollView, Text, View ,Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import FullScreenView from './FullScreenView';
import PeriodBox from './PeriodBox';




export const Home = (props) => {
  const day = currentDay();
  const navigation = useNavigation();
  const schedule = props.schedule;

    return(
      <FullScreenView>
    <ScrollView style = {styles.background}>
        <View style = {styles.image}>
    {/*adds a button to navigate to TimeLeft screen*/}
          <Pressable onPress={() => navigation.navigate('TimeLeft', {name: 'TimeLeft'})}>
           <Image style = {styles.image} source={require("../assets/switchscreen.png")}  />
          </Pressable>
        </View>

    {/*display for the header box and header text at the top of the screen*/}
        <HeaderBox 
          headerText = "Monarch High School Schedule"
        />
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
</FullScreenView>

    )   
}