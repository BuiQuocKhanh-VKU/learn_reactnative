import { useState } from "react";
import {
   Alert,
   Button,
   FlatList,
   Keyboard,
   Pressable,
   StyleSheet,
   Text,
   TextInput,
   TouchableWithoutFeedback,
   View,
} from "react-native";

interface ITodo {
   id: number;
   name: string;
}

export default function App() {
   const [test, setTest] = useState({ name: "Khanh's", age: 18 });
   const [todo, setTodo] = useState("");
   const [listTodo, setListTodo] = useState<ITodo[]>([]);

   function randomInteger(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   const handleAddTodo = () => {
      if (!todo) {
         Alert.alert("Lỗi input todo!", "Todo k dc bỏ trống", [
            {
               text: "Huy",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel",
            },
            {
               text: "Xac nhan",
               onPress: () => console.log("OK pressed"),
            },
         ]);
         return;
      }
      setListTodo([...listTodo, { id: randomInteger(2, 2000), name: todo }]);
      setTodo("");
   };

   const deleteTodo = (id: number) => {
      const newTodos = listTodo.filter((item) => item.id !== id);
      setListTodo(newTodos);
   };

   return (
      <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
         <View style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>{test.name} Todo</Text>

            {/* form */}
            <View style={styles.body}>
               <TextInput value={todo} style={styles.todoInput} onChangeText={(value) => setTodo(value)} />
               <Button title="Add todo" onPress={handleAddTodo} />

               <Text> Form</Text>
            </View>

            {/* list todo */}
            <View style={styles.body}>
               <FlatList
                  data={listTodo}
                  keyExtractor={(item) => item.id + ""}
                  renderItem={({ item }) => {
                     return (
                        <Pressable
                           onPress={() => deleteTodo(item.id)}
                           style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                        >
                           <Text style={styles.todoItem}>{item.name}</Text>
                        </Pressable>
                     );
                  }}
               />
               {/* <Text> {JSON.stringify(listTodo)}</Text> */}
            </View>
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   header: {
      backgroundColor: "orange",
      paddingHorizontal: 20,
      textAlign: "center",
      fontSize: 30,
   },
   container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: "#fff",
      // alignItems: "center",
      // justifyContent: "center",
   },

   todoItem: {
      fontSize: 30,
      borderWidth: 1,
      borderStyle: "dashed",
      marginBottom: 20,
      padding: 10,
   },
   todoInput: {
      borderBottomWidth: 1,
      borderColor: "green",
      padding: 5,
      margin: 15,
   },

   body: {
      paddingHorizontal: 10,
      marginBottom: 20,
   },
});
