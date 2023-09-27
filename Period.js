import {Text} from 'react-native';

export default class Period{
    
    start;
    end;
    periodNumber;

    constructor(per,s,e){
        periodNumber = [per];
        start = [s];
        end = [e];
    }
    getPeriodNumber(){
        return periodNumber;
    }
    setPeriodNumber(per){
        periodNumber = [per]
    }
    getArray(){
        return <Text> {start} - {end} </Text>;
    }

    setStart(s){
        start = [s];
    }
    setEnd(e){
        end = [e];    
    }

    getStart(){
        return {start};    
    }

    getEnd(){
        return {end};    
    }
}