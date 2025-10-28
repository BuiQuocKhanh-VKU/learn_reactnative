import { OPENSAN_REGULAR } from "@/utils/const";
import { Button, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    home: {
        fontSize: 30,
      fontFamily: OPENSAN_REGULAR,
    }
});

const HomeScreen = () => {
    return(
        <View>
            <Text style={styles.home}>
                Home Screen
            </Text>
         <Button title="View detail"/>
        </View>
    )
}

export default HomeScreen;