import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      backgroundColor: "#ccc",
      paddingHorizontal: 10,
      paddingVertical: 5,
      alignItems: "center",
    
   },

   headerText: {
      textAlign: "center",
      flex : 1,
      fontSize: 25,
      fontWeight: 600,
   },
});

const AppHeader = () => {
   const navigation: any = useNavigation();

   return (
      <View style={styles.container}>
         <Entypo
            onPress={() => {
               navigation.openDrawer();
            }}
            name="menu"
            size={24}
            color="black"
         />
         <Text style={styles.headerText}> Khanh Bui App</Text>
      </View>
   );
};

export default AppHeader;
