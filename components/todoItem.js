import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={ () => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={24} color="black" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:'5%',
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection:'row',
    },
    itemText:{
        marginLeft:10,
    }
})