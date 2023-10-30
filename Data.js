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
        Time: {props.start} - {props.end}  
        </Text>
    </View>
    )
   
}

const descriptorText = {
        color: '#FFFFFF',
        fontSize: '25px',
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        paddingLeftnpm: '55px',
}
const headerText= {
      color: '#FF',
      fontSize: '30px',
      fontFamily: 'OpenSans',
      paddingLeft: '40px',
      fontWeight: 'bolder',
    };
const periodBox = {
        flex: '1',
        justifyContent: 'center',
        backgroundColor: '#D4AF37',
        marginBottom: 12,
        width: 300,
        height: 300,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#00000040'
      };