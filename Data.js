import {Text, View, StyleSheet} from 'react-native';
import moment from 'moment/moment';
export const Period = function (periodNum, sTime, eTime) {
  const splitStart = sTime.split(":");
  const splitEnd = eTime.split(":");
  //fixes abnormal case for when hour changes from 12 to 1
  if(splitStart[0] == 12)
  {splitStart[0] = splitStart[0] - 12}
  if(splitStart[0] == 12 && splitEnd[0] == 12)
  {splitEnd[0] = splitEnd[0] - 12}  
  //end and start are two Numbers that represent start and end time in minutes
  const end = splitEnd[0] * 60 + Number(splitEnd[1])
  const start = splitStart[0] * 60 + Number(splitStart[1])
  //stashes the current hour and minute 
    let hours = new Date().getHours(); 
    const min = new Date().getMinutes(); 
  //changes hours to standard formatting, however, if it is after 8pm it keeps it the same
    if(hours > 12 && hours < 20)
    {hours = hours - 12}
    const timeMins = hours * 60 + min;
    if(timeMins >= start && timeMins <= end)
    {currentPeriod = true}
    else
    {currentPeriod = false}
    
    const periodNumber = periodNum;
    const startTime = sTime;
    const endTime = eTime;


    return{currentPeriod, periodNumber, startTime, endTime}
}


export const PeriodBox = function (props) {
    return(
    <View 
        style = {props.isPeriod
        ? [styles.periodBox, styles.outlineBox]
        : styles.periodBox
        }>
        <Text style = {styles.headerText}>
        {props.period} Period {'\n'} 
        </Text>
        <Text style = {styles.descriptorText}>
         {props.start} - {props.end}  
        </Text>
    </View>
    )
   
}
export const currentDay = function () {
  const currentDay = new Date().getDay();
  let day = "";
  if(currentDay == 1)
  {day = "Monday"}
  if(currentDay == 2)
  {day = "Tuesday"}
  if(currentDay == 3)
  {day = "Wednesday"}
  if(currentDay == 4)
  {day = "Thursday"}
  if(currentDay == 5)
  {day = "Friday"}
  if(currentDay == 6)
  {day = "Saturday"}
  if(currentDay == 7)
  {day = "Sunday"}
  return(day)
}
const styles = StyleSheet.create({
 descriptorText: {
        color: '#B2B2B2',
        fontSize: 14,
        fontFamily: 'Arial',
        left: 15,
        bottom: 7,
},
 headerText: {
      top: 7,
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: 'Arial',
      left: 15,
    },
 periodBox: {
        top: 70,
        backgroundColor: '#222222',
        marginBottom: 12,
        width: 370,
        height: 70,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#00000040',
        borderRadius: 15,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10, 
      },
outlineBox: {
        width: 375,
        height: 70,
        borderWidth: 3,
        borderColor: '#D4AF37', 
      },
    })