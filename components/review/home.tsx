import { OPENSAN_REGULAR } from "@/utils/const";
import { StyleSheet, Text, View } from "react-native"

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
        </View>
    )
}

export default HomeScreen;