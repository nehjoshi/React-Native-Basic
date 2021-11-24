import { GlobalStyles } from '../styles/Global';
import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({ navigation }) {

    const ToDetails = () => {
        navigation.push ("ReviewDetails");
    }

    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.headerText}>Home</Text>
            <Text style={GlobalStyles.text}>Paragraph text</Text>
            <Button title="Go to details" onPress={() => {navigation.push("ReviewDetails")}} />
        </View>
    )
}
