import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({item, deleteChore}) {
    
    return (
        <TouchableOpacity onPress={() => deleteChore(item.id)}>
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        padding: 16,
        marginTop: 16,
        borderColor: '#0081fa',
        borderWidth: 1,
        borderRadius: 10,
        fontWeight: 'bold',
    }
})
