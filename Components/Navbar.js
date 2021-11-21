import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My To-Do List</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0081fa',
        width: "100%",
        height: "10%",
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        elevation: 100,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})