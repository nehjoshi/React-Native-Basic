import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import AddItem from './Components/AddItem';
import Navbar from './Components/Navbar';
import TodoItem from './Components/TodoItem';

export default function App() {

  const [chores, setChores] = useState([
    { title: "Laundry", id: 1},
    { title: "Drying", id: 2},
    { title: "Cooking", id: 3},
  ]);

  const AddChore = (chore) => {
    setChores(chores => {
      return [...chores, chore];
    });
  }

  const DeleteChore = (id) => {
    setChores(prev => {
      return prev.filter(chore => chore.id != id);
    });
    alert("Deleted Item Successfully!");
  }

  return (
    <View style={styles.container}>
      <Navbar />
      <AddItem addChore={AddChore } />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList 
          keyExtractor={(item) => item.id}
          data={chores}
          renderItem={({item}) => (
            <TodoItem item={item} deleteChore={DeleteChore} />
          )}/>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
