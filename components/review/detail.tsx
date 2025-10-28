import { OPENSAN_REGULAR } from "@/utils/const";
import { NavigationProp, ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
   detail: {
      fontSize: 30,
      fontFamily: OPENSAN_REGULAR,
   },
   reviewText: {
      fontSize: 25,
      fontFamily: OPENSAN_REGULAR,
      padding: 15,
   },
});
const DetailScreen = () => {
   const navigation: NavigationProp<ParamListBase> = useNavigation();
   const route: RouteProp<RootStackParamList, "detail"> = useRoute();

   return (
      <View> 
         <Text style= {styles.reviewText}>Id: {route.params?.id}</Text>
         <Text style= {styles.reviewText}>Title: {route.params?.title}</Text>
         <Text style= {styles.reviewText}>Start: {route.params?.star}</Text>
         <Button title="Go home" onPress={() => navigation.navigate("home")} />
      </View>
   );
};

export default DetailScreen;
