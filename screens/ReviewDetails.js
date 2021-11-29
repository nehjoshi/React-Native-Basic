import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/Global';
import { ImageExporter } from '../styles/ImageExporter.js';

export default function ReviewDetails({ route, navigation }) {
    const { title, body, rating, ratingInt } = route.params;
    const ratingString = ratingInt.toString();
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.card}>
                <Text style={GlobalStyles.headerText}>{title}</Text>
                <Text style={GlobalStyles.text}>{body}</Text>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>Rating: {rating}</Text>
                    <Image source={ImageExporter.ratings[ratingString]} />
                </View>
                <Button title="Back to home" onPress={() => { navigation.pop() }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderColor: "#cccccc",
        borderWidth: 1,
        elevation: 1,
        padding: 10,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        borderTopColor: "#cccccc",
        borderTopWidth: 1,
        paddingTop: 10,
    },
    ratingText: {
        marginRight: 10,
    }
})