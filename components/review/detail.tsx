import { OPENSAN_REGULAR } from "@/utils/const";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    detail: {
        fontSize: 30,
        fontFamily: OPENSAN_REGULAR,
    }
});
const DetailScreen = () => {

   const navigation: NavigationProp<ParamListBase> = useNavigation()
   return (
      <View>
         <Text style={styles.detail}>Detail Screen</Text>
         <Button title="Go home" onPress={() => navigation.navigate("home")}/>
      </View>
   );
};

export default DetailScreen;
