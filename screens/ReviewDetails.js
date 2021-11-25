import React from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyles } from '../styles/Global';

export default function ReviewDetails({ navigation }) {
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.headerText}>Review Details</Text>
            <Text style={GlobalStyles.text}>{navigation.getParam('body')}</Text>
            <Button title="Back to home" onPress={() => { navigation.pop() }} /> 
        </View>
    )
}
