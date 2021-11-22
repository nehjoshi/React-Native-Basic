import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, deleteChore }) {

    return (
        <TouchableOpacity onPress={() => deleteChore(item.id)}>
            <View style={styles.container}>
                <Text style={styles.text}>{item.title}</Text>
                <MaterialIcons name="delete" size={24} color="#333" />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#0081fa',
        borderWidth: 1,
        borderRadius: 2,
        padding: 15,
        marginVertical: 10,
    },  
    text: {
        fontWeight: 'bold',
        color: '#333',
    }
})
