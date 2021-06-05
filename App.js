import React, { useState } from "react"
import Constants from "expo-constants"
import {
   Keyboard,
   KeyboardAvoidingView,
   Platform,
   Dimensions,
   ScrollView,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   View
} from "react-native"
import Task from "./components/Task"
const screenHeight = Dimensions.get("window").height - 100
export default function App() {
   const [task, setTask] = useState("")
   const [taskItems, setTaskItems] = useState([])
   const handleAddTask = () => {
      Keyboard.dismiss()
      setTaskItems([...taskItems, task])
      setTask("")
   }
   const onCompleteTask = (index) => {
      let copyItems = [...taskItems]
      copyItems.splice(index, 1)
      setTaskItems(copyItems)
   }

   return (
      <View style={styles.container}>
         <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}>Today's task</Text>
            <ScrollView>
               <View style={styles.items}>
                  {taskItems.map((task, index) => {
                     return (
                        <TouchableOpacity
                           key={index}
                           onPress={() => onCompleteTask(index)}
                        >
                           <Task text={task} />
                        </TouchableOpacity>
                     )
                  })}
               </View>
            </ScrollView>
         </View>

         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
         >
            <TextInput
               placeholder="Write a Task"
               style={styles.input}
               value={task}
               onChangeText={(text) => setTask(text)}
            />
            <TouchableOpacity onPress={() => handleAddTask()}>
               <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
               </View>
            </TouchableOpacity>
         </KeyboardAvoidingView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#E8EAED"
   },
   taskWrapper: {
      paddingTop: 20,
      paddingHorizontal: 20,
      height: screenHeight
   },
   sectionTitle: {
      fontSize: 24,
      fontWeight: "bold"
   },
   items: {
      marginTop: 30
   },
   writeTaskWrapper: {
      position: "absolute",
      bottom: 60,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
   },
   input: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      width: 250,
      backgroundColor: "#FFFFFF",
      borderRadius: 60,
      borderWidth: 1,
      borderColor: "#C0C0C0"
   },
   addWrapper: {
      width: 50,
      height: 50,
      borderRadius: 60,
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#C0C0C0"
   },
   addText: {}
})
