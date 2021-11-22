import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddItem from './Components/AddItem';
import Navbar from './Components/Navbar';
// import Sandbox from './Components/Sandbox';
import TodoItem from './Components/TodoItem';

export default function App() {

  const [chores, setChores] = useState([
    { title: "Laundry", id: 1 },
    { title: "Drying", id: 2 },
    { title: "Cooking", id: 3 },
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
    Alert.alert("Success", "Deleted Item Successfully!", [
      { text: "Okay", onPress: () => console.log("Okay Pressed") }
    ]);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Navbar />
        <AddItem addChore={AddChore} />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={chores}
              renderItem={({ item }) => (
                <TodoItem item={item} deleteChore={DeleteChore} />
              )} />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
    
    
  );

}


//Original styles
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  content: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
