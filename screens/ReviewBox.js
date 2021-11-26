import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

export default function ReviewBox({ item, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{item.title}: {item.rating}</Text>
            <Button title="Review Details" onPress={() => {navigation.navigate('ReviewDetails', item)}} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#E2F1FF",
        padding: 10,
        borderRadius: 20,
        marginVertical: 10,
    },
    headerText: {
        fontFamily: "LatoBold",
        marginBottom: 10,
        fontSize: 20,
    },
});
