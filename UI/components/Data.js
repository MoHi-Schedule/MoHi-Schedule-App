import { Text, View} from 'react-native';
import {styles} from './stylesheets'
export const Period = function (periodNum, sHour, sMin, eHour, eMin) {
  const periodNumber = periodNum;
  let startMin = sMin;
  let startHour = sHour;
  let endMin = eMin;
  let endHour = eHour;
  //fixes abnormal case for when mins should have 0 as first digit
  if (startMin < 10) {
    startMin = "0" + startMin;
  }
  if (endMin < 10) {
    endMin = "0" + endMin;
  }
  //if you change anything on line 17 you need to edit the indexes of schedule in currentPeriodNumber function
  return {periodNumber, startHour, startMin, endHour, endMin}
}
//this is where all database values should be grabbed, constructs periods + returns a schedule that can be gotten at all times
export const getSchedule = function () {
  //hardcoding all 7 period variables
  const per1 = Period("1st", 8, 35, 9, 27);
  const per2 = Period("2nd", 9, 32, 10, 24,);
  const per3 = Period("3rd", 10, 29, 11, 27);
  const per4 = Period("4th", 12, 12, 1, 4);
  const per5 = Period("5th", 1, 9, 2, 1);
  const per6 = Period("6th", 2, 6, 2, 58);
  const per7 = Period("7th", 3, 3, 3, 55);
  //create an array "schedule" that contains 7 periods
  const schedule = [per1, per2, per3, per4, per5, per6, per7];
  return schedule;
}
//builds the UI of a period by setting up text for the period box
export const PeriodBox = function (props) {
  return (
    <View
    //if period is current period, use outlineBox style to highlight it alongside using the periodBox style, if not just use the periodBox style
      style={props.currentPeriod
        ? [styles.periodBox, styles.outlineBox]
        : styles.periodBox
      }>
      <Text style={styles.periodNumberText}>
        {props.periodNumber} Period {'\n'}
      </Text>
      <Text style={styles.descriptorText}>
        {props.startHour}:{props.startMin} - {props.endHour}:{props.endMin}
      </Text>
    </View>
  )
}
//returns the current period number, receives param schedule, iterates through each period, if current time is within start and end time of a period return period number, if there is no current period return null
export const currentPeriodNumber = function (schedule) {
  const hours = new Date().getHours() % 12;
  const min = new Date().getMinutes();
  const currentTime = hours * 60 + min;
  for (let i = 0; i < schedule.length; i++) {
    //fixes abnormal case for when hour changes from 12 to 1
    if (schedule[i].startHour == 12) {
      schedule[i].startHour -= 12
      if (schedule[i].endHour == 12) {schedule[i].endHour -= 12 }
    }
    //converts all strings (endMin and startMin) to ints
    schedule[i].endMin = Number(schedule[i].endMin)
    schedule[i].startMin = Number(schedule[i].startMin)
        //gets the start time and end time of a period and displays it in minutes
    const start = schedule[i].startHour * 60 + schedule[i].startMin;
    const end = schedule[i].endHour * 60 + schedule[i].endMin;
    //compare currentTime to startTime and endTimes of a period
    if (currentTime >= start && currentTime <= end) {

      return i + 1;
    }
  }
  
  return null;
}

//checks if a period is the current period, accepts period as param and returns true or false, also accepts schedule as a param so it can access currentPeriodNumber
export const isCurrentPeriod = function (periodNum, schedule) {
  const periodNumber = periodNum.substring(0, 1);
  return periodNumber == currentPeriodNumber(schedule);
}
//returns the current day as a string 
export const currentDay = function () {
  const currentDay = new Date().getDay();
  let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return day[currentDay];
}
