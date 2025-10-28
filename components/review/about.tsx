import { globalStyles } from "@/utils/const";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
   about: {
      fontSize: 30,
      //   fontFamily:'FontText'
      padding: 15,
   },
});

const AboutScreen = () => {
   return (
      <View>
         <Text style={[styles.about, globalStyles.globalFont]}>About Review Khanh</Text>
          <Text style={[styles.about, globalStyles.globalFont]}>Made by me</Text>
      </View>
   );
};

export default AboutScreen;
