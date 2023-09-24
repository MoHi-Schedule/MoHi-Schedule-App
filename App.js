import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,} from 'react-native';
import moment from 'moment/moment';


export default function App() {
  

  var date = moment().utcOffset('+5:30').format('YYYY-MM-DD hh:mm:ss a');

  return (
    <View style={styles.container}>
      <Text style ={textStyles}> Welcome to the MoHi Schedule App!</Text>

      
      <Text style = {textStyles}> Today's Date: {date} </Text>
     
      <Image style = {styles.image} source={require("./assets/info.png")} />
      <StatusBar style="auto" />
    </View>
  );

}

const textStyles = {color : '#FFD700'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  setColor:{
    color: '#FFD700',
  },
  image:{
    width : 50, 
    height: 50,
    position: 'absolute',
      left: 20,
      top: 50,
      bottom: 0,
      right: 0
  }
});
