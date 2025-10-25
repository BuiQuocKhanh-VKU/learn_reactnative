import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
   return (
      <View style={styles.container}>
         <View>
            <Text style={styles.header}>Hoi cai qq</Text>
         </View>
         <Text style={styles.hello1}>I am Khanh!</Text>
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
   hello1: { color: "red", fontSize: 60, borderBottomWidth: 12, borderColor: "green", padding: 10 },
   header: {fontSize: 30, fontWeight: "bold"},
});
