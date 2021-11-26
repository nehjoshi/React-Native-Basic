import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../styles/Global';

export default function About() {
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.headerText}>About</Text>
            <Text style={GlobalStyles.text}>Paragraph Text</Text>
        </View>
    )
}