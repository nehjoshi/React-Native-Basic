import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: "Neh", age: "23", id: 1 },
    { name: "David", age: "24", id: 2 },
    { name: "Scott", age: "25", id: 3 },
    { name: "Joe", age: "26", id: 4 },
    { name: "Dan", age: "27", id: 5 },
    { name: "Kinsey", age: "29", id: 6 },
    { name: "Otis", age: "30", id: 7 },
    { name: "Ruby", age: "31", id: 8 },
    { name: "Maeve", age: "32", id: 9 },
    { name: "Eric", age: "33", id: 10 },
    { name: "Dude", age: "34", id: 11 },
    { name: "Michael", age: "14", id: 12 },
    { name: "Elevel", age: "32", id: 13 },
    { name: "Love", age: "22", id: 14 },
    { name: "Theo", age: "23", id: 15 },
  ]);
  return (
    <View style={styles.container}>
      <FlatList   //Flatlist is more efficient than 
        keyExtractor={(item) => item.id}
        numColumns={3}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item.name} : {item.age}</Text>
        )}
      />
      {/* <ScrollView>
          {people.map(item => (
              <View key={item.id}>
                <Text style={styles.text}>{item.name} : {item.age}</Text>
              </View>
            )
          )}
        </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: "#0081fa",
    elevation: 10,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 2,
    marginVertical: 5,
    color: '#fff',
  }
});
