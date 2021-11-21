import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Navbar from './Components/Navbar';
import TodoItem from './Components/TodoItem';

export default function App() {

  const [chores, setChores] = useState([
    { title: "Laundry", id: 1},
    { title: "Drying", id: 2},
    { title: "Cooking", id: 3},
  ]);

  const DeleteChore = (id) => {
    setChores(prev => {
      return prev.filter(chore => chore.id != id);
    })
  }

  return (
    <View style={styles.container}>
      <Navbar />
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
    marginTop: '13%',
  },
  list: {
    marginTop: 20,
  }
});
