import { OPENSAN_REGULAR } from "@/utils/const";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
   home: {
      fontSize: 30,
      fontFamily: OPENSAN_REGULAR,
   },
});

const HomeScreen = () => {
 const navigation: NavigationProp<ParamListBase> = useNavigation()
  
   return (
      <View>
         <Text style={styles.home}>Home Screen</Text>
         <Button title="View detail" onPress={() => navigation.navigate("detail")} />
      </View>
   );
};

export default HomeScreen;
