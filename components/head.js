import React from "react";
import { View, StyleSheet, Text } from "react-native";  

export default function Head() {
    return (
        <View style={styles.head}>
            <Text style={styles.title}>Todo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        marginBottom:'5%',
        height:100,
        width:'100%',
        backgroundColor:'skyblue'
      },
      title:{
        marginTop:'5%',
        textAlign:'center',
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:36,
        color:'#fff',
      }
})