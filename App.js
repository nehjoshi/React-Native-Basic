import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [ready, setReady] = useState(false);
  const handleSubmit = () => {
    alert(`Hello ${name}`);
    setReady(true);
  }
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>
          Enter your name:
        </Text>
        <TextInput onChangeText={(text) => setName(text)} style={styles.input} />
        <Button title="Submit" onPress={handleSubmit} />
        {ready && <Text style={styles.headerText}>Hello {name}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    color: 'gray',
  }
});
