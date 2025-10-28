import AntDesign from "@expo/vector-icons/AntDesign";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
   },
   modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
   },
   button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
   },
   buttonOpen: {
      backgroundColor: "#F194FF",
   },
   buttonClose: {
      backgroundColor: "#2196F3",
   },
   textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
   },
   modalText: {
      marginBottom: 15,
      textAlign: "center",
   },
   header: {
      flexDirection: "row",
      borderBottomWidth: 1,
      padding: 10,
      borderBottomColor: "red",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 10,
   },
   container:{
    backgroundColor: "white"
   },
   groupInput: {
      marginBottom: 15,
      marginHorizontal:15,
   },
   text: {
      fontSize: 25,
      fontWeight: "bold",
   },
   input: {
      borderWidth: 1,
      borderColor: "green",
      marginVertical: 10,
      paddingVertical:5,
      paddingHorizontal: 10,
   },
});

interface IProps {
   modalVisible: boolean;
   setModalVisible: (v: boolean) => void;
}
const CreateModal = (props: IProps) => {
   const { modalVisible, setModalVisible } = props;
   console.log("ss", props);
   return (
      <>
         <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.container}>
               {/* header */}
               <View style={styles.header}>
                  <Text> Create a review </Text>
                  <AntDesign onPress={() => setModalVisible(false)} name="close-circle" size={24} color="black" />
               </View>

               {/* body */}
               <View style={styles.groupInput}>
                  <Text style={styles.text}>Noi dung</Text>
                  <TextInput style={styles.input} />
               </View>
               <View style={styles.groupInput}>
                  <Text style={styles.text}>Rating</Text>
                  <TextInput style={styles.input} />
               </View>
               {/* <Text style={styles.modalText}>Hello World!</Text>
               <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
               </Pressable> */}
            </View>
         </Modal>
      </>
   );
};

export default CreateModal;
