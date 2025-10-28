import { globalStyles } from "@/utils/const";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
   about: {
      fontSize: 30,
  //   fontFamily:'FontText'
   },
});

const AboutScreen = () => {
   return (
      <View>
         <Text style={[styles.about, globalStyles.globalFont]}>About Screen gg</Text>
      </View>
   );
};

export default AboutScreen;
