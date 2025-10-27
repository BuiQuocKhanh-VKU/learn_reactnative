import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
       // fontFamily: "KhanhFont",
    }
});

const AboutScreen = () => {
   return (
      <View>
         <Text style={styles.about}>About Screen</Text>
      </View>
   );
};

export default AboutScreen;
