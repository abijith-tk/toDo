import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddTodo({submitHandler}) {
    const [text,setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder="New Todo"
                onChangeText={changeHandler}
            />
            <Button title='Add Todo' onPress={() => submitHandler(text)} color='skyblue'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:'gray',
    },
})