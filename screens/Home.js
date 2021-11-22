import { GlobalStyles } from '../styles/Global';
import React from 'react'
import { View, Text } from 'react-native'

export default function Home({ Lato }) {

    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.headerText}>Home</Text>
        </View>
    )
}
