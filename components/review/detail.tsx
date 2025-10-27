import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    detail: {
        fontSize: 30,
        fontFamily: "KhanhFont",
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
