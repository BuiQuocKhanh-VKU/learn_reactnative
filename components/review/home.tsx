import { OPENSAN_REGULAR } from "@/utils/const";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CreateModal from "./create.modal";

interface Ireview {
   id: number;
   title: string;
   star: number;
}

const styles = StyleSheet.create({
   home: {
      fontSize: 30,
      fontFamily: OPENSAN_REGULAR,
      paddingLeft: 15,
   },
   reviewItem: {
      padding: 15,
      backgroundColor: "#ccc",
      margin: 15,
   },
});

const HomeScreen = (props: any) => {
   const navigation: NavigationProp<ParamListBase> = useNavigation();
   const [khanh, setKhanh] = useState({ name: "Bui", age: 18 });
   const [reviews, setReview] = useState<Ireview[]>([
      { id: 1, title: "react", star: 5 },
      { id: 2, title: "react2", star: 5 },
      { id: 3, title: "react2", star: 5 },
   ]);

   const [modalVisible, setModalVisible] = useState(false);

   return (
      <View>
         <Text style={styles.home}>Review list: {khanh.name}</Text>
         <Button title="Add" onPress={ () => setModalVisible(true) }/>
         <View>
            <FlatList
               data={reviews}
               keyExtractor={(item) => item.id + ""}
               renderItem={({ item }) => {
                  return (
                     <TouchableOpacity onPress={() => navigation.navigate("detail", item)}>
                        <View style={styles.reviewItem}>
                           <Text>{item.title}</Text>
                        </View>
                     </TouchableOpacity>
                  );
               }}
            />
         </View>
         <CreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
   );
};

export default HomeScreen;
