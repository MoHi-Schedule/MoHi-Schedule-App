
import {StyleSheet, View, Text} from 'react-native';
//builds the UI of a period by setting up text for the period box
export default function PeriodBox (props) {
    return (
      <View
      //if period is current period, use outlineBox style to highlight it alongside using the periodBox style, if not just use the periodBox style
        style={props.currentPeriod
          ? [styles.periodBox, styles.outline]
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

  const styles = StyleSheet.create({
    periodBox: {
      backgroundColor: '#222222',
      marginBottom: 16,
      shadowOffset: { height: 4, width: 0 },
      shadowOpacity: 1,
      shadowRadius: 4,
      shadowColor: '#00000040',
      borderRadius: 15,
      justifyContent: 'center',
      marginLeft: 8,
      marginRight: 8,
      paddingVertical: 12,
    },
    outline: {
      borderWidth: 3,
      borderColor: '#D4AF37',
    },
    periodNumberText: {
      top: 7,
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: 'Arial',
      left: 15,
    },
    descriptorText: {
      color: '#B2B2B2',
      fontSize: 14,
      fontFamily: 'Arial',
      left: 15,
      bottom: 7,
    },
  })