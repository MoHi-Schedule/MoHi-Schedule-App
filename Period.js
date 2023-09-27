import {Text} from 'react-native';

export default class Period{
    
    start;
    end;

    constructor(s,e){
        start = [s];
        end = [e];
    }

    getArray(){
        return <Text> {start} {end} </Text>;
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