import { OPENSAN_REGULAR } from "@/utils/const";
import { NavigationProp, ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Button, Image, ImageBackground, StyleSheet, Text } from "react-native";
import startIcon from "../../assets/images/star.png";

const styles = StyleSheet.create({
   detail: {
      fontSize: 30,
      fontFamily: OPENSAN_REGULAR,
   },
   reviewText: {
      fontSize: 25,
      fontFamily: OPENSAN_REGULAR,
      padding: 15,
      color: "white",
   },
});
const DetailScreen = () => {
   const navigation: NavigationProp<ParamListBase> = useNavigation();
   const route: RouteProp<RootStackParamList, "detail"> = useRoute();

   return (
      <ImageBackground style={{ flex: 1 }} source={require("../../assets/images/react-native.png")}>
         <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
         <Text style={styles.reviewText}>Title: {route.params?.title}</Text>
         <Text style={styles.reviewText}>Rating: {route.params?.star}</Text>
         <Image style={{ height: 50, width: 50 }} source={startIcon} />
         <Button title="Go home" onPress={() => navigation.navigate("home")} />
      </ImageBackground>
   );
};

export default DetailScreen;
