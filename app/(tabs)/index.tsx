import { useState } from "react";
import {  ScrollView, StyleSheet, Text, View } from "react-native";


export default function App() {
   const [students, setStudents] = useState([
      { id: 1, name: "Khanh", age: 20 },
      { id: 2, name: "Vy", age: 18 },
      { id: 3, name: "Kieu", age: 10 },
      { id: 4, name: "Quoc", age: 21 },
      { id: 5, name: "Bui", age: 11 },
      { id: 6, name: "Thi", age: 12 },
   ]);
   const [test, setTest] = useState({ name: "Vy ne", age: 18 });

   return (
      <View style={styles.container}>
         <Text style={{ fontSize: 60 }}>Anh iu em {test.name}</Text>
         <ScrollView>
            {students.map((item) => {
               return (
                  <View
                     key={item.id}
                     style={{
                        padding: 30,
                        backgroundColor: "pink",
                        marginBottom: 30,
                     }}
                  >
                     <Text> {item.name}</Text>
                  </View>
               );
            })}
         </ScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical: 50,
      paddingHorizontal: 20,
      backgroundColor: "#fff",
      // alignItems: "center",
      // justifyContent: "center",
   },
});
