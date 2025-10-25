import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
   const [count, setCount] = useState<number>(0);
   const [test, setTest] = useState({ name: "Vy", age: 18 });
   return (
      <View style={styles.container}>
         <View>
            <Text style={styles.header}>
               {test.name} Hoi cai qq count = {count}
            </Text>
         </View>

         <StatusBar style="auto" />
         <View>
            <Button color={"green"} title="Increase" onPress={() => setCount(count + 1)} />
         </View>
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
   header: { fontSize: 30, fontWeight: "bold" },
});
