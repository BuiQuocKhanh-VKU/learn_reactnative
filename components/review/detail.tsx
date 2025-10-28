import { OPENSAN_REGULAR } from "@/utils/const";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    detail: {
        fontSize: 30,
        fontFamily: OPENSAN_REGULAR,
    }
});
const DetailScreen = () => {
   return (
      <View>
         <Text style={styles.detail}>Detail Screen</Text>
      </View>
   );
};

export default DetailScreen;
