import {Text, View} from 'react-native';

export const Period = function (periodNum, sTime, eTime) {
    const periodNumber = periodNum
    const startTime = sTime
    const endTime = eTime
    return{periodNumber, startTime, endTime}
}

export const Schedule = function () {

}

export const PeriodBox = function (props) {
    return(
    <View style = {periodBox}>
        <Text style = {headerText}>
        {props.period} Period {'\n'} 
        </Text>
        <Text style = {descriptorText}>
         {props.start} - {props.end}  
        </Text>
    </View>
    )
   
}

const descriptorText = {
        bottom: 15,
        color: '#878787',
        fontSize: 20,
        fontFamily: 'Arial',
        textAlign: 'center',
}
const headerText= {
      top: 7,
      color: '#FFFFFF',
      fontSize: 25,
      fontFamily: 'Arial',
      textAlign: 'center',

    };
const periodBox = {
        backgroundColor: '#222222',
        marginBottom: 12,
        width: 370,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#00000040',
        borderRadius: 15,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10, 
      };