import {StyleSheet, View, Text} from 'react-native';

export default function DateBox (props){
return(
    <View style = {styles.dateBox}>
        <Text style = {styles.dayText}>
            {props.dateText}
        </Text>
    </View>
)
}

export const styles = StyleSheet.create({ 
    dayText: {
      textAlign :'center',
      color: '#FFFFFF',
      fontFamily: 'Arial',
      fontSize: 25,
    },
    dateBox: {
      paddingVertical: 3,
      marginTop: 5,
      marginBottom: 5,
    },
})