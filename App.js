import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Head from './components/head';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todo,setTodo] = useState([]);
   
  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter( todo => todo.key != key)
    })
  }

  const submitHandler = (inputText) => {
    setTodo((prevTodo) => {
      return [
        { text:inputText, key:Math.random().toString()},
        ...prevTodo
      ];
    })
  }

  return (
    <View style={styles.container}>
      <Head />
       <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todo}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
       </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});