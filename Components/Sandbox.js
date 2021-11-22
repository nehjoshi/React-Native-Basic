import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 3</Text>
            <Text style={styles.box4}>Box 4</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flexDirection: 'row',
        backgroundColor: '#ddd',
    },
    box1: {
        flex: 3,
        textAlign: 'center',
        backgroundColor: "violet",
        padding: 10
    },
    box2: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: "coral",
        padding: 10
    },
    box3: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: "skyblue",
        padding: 10
    },
    box4: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: "gold",
        padding: 10
    }
})
