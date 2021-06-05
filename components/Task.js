import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Task = ({ text }) => {
   return (
      <View style={styles.item}>
         <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.itemText}>{text}</Text>
         </View>
         <View style={styles.circular}></View>
      </View>
   )
}
const styles = StyleSheet.create({
   item: {
      backgroundColor: "white",
      padding: 15,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
      justifyContent: "space-between"
   },
   itemLeft: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap"
   },
   square: {
      width: 24,
      height: 24,
      backgroundColor: "#55BCF6",
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15
   },
   itemText: {
      maxWidth: "80%"
   },
   circular: {
      width: 12,
      height: 12,
      borderColor: "#55BCF6",
      borderRadius: 5,
      borderWidth: 2
   }
})
export default Task
