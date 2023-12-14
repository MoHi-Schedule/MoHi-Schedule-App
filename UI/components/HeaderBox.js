export default function HeaderBox (props){
    return(
        <View style = {styles.headerBox}>
            <Text style = {styles.headerText}> 
                {props.headerText} 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
    width: 370,
    height: 50,
    backgroundColor: '#BBA53D',
    justifyContent: 'center',
    borderRadius: 15,
    left: 10,
    right: 10,
  },
  headerText: {
    fontFamily: 'Arial',
    fontSize: 20, 
    textAlign: 'center',
  },
})