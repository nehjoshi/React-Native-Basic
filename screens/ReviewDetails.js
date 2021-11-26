import React from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyles } from '../styles/Global';

export default function ReviewDetails({ route, navigation }) {
    const { title, body } = route.params;
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.headerText}>Review Details</Text>
            <Text style={GlobalStyles.text}>{body}</Text>
            <Button title="Back to home" onPress={() => { navigation.pop() }} /> 
        </View>
    )
}
