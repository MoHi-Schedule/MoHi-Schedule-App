import {Text} from 'react-native';
import Period from './Period';

export default class Schedule{
 
    periods; 

    constructor(per){
        periods = [per];
    }



}


const styles = StyleSheet.create({
    Schedule: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 12,
      backgroundColor: '#cfcfcf',
      shadowOffset: { height: 4, width: 0 },
      shadowOpacity: 1,
      shadowRadius: 4,
      shadowColor: '#00000040',
    },
  
    periodText: {
      paddingLeft: 16,
      fontFamily: 'FiraSans',
      fontSize: 12,
    },
    currentBox: {
      backgroundColor: '#cbb77c',
    },
  });