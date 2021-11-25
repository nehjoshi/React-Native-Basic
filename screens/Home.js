import { GlobalStyles } from '../styles/Global';
import React, { useState } from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import ReviewBox from './ReviewBox';

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: "Review 1", rating: '5/10', body: "First review body", key: 1 },
        { title: "Review 2", rating: '6/10', body: "Second review body", key: 2 },
        { title: "Review 3", rating: '7/10', body: "Third review body", key: 3 },
        { title: "Review 4", rating: '8/10', body: "Fourth review body", key: 4 },
    ])

    return (
        <View style={GlobalStyles.container}>
            <FlatList data={reviews} keyExtractor={item => item.key} renderItem={({ item }) => (
                <ReviewBox item={item} navigation={navigation} key={item.key}/>
            )} />
        </View>
    )
}
