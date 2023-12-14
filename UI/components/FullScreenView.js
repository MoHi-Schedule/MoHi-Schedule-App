import { SafeAreaView } from "react-native-safe-area-context";
import {StyleSheet} from "react-native";


export default function FullScreenView(props)
{
    return(<SafeAreaView style = {styles.fullscreenstyle}>{props.children}</SafeAreaView>);
}

const styles = StyleSheet.create({
    fullscreenstyle: {
        flex: 1,
        backgroundColor: '#333333',
    },
});
