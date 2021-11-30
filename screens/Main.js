import { GlobalStyles } from '../styles/Global';
import React, { useState } from 'react'
import { View, FlatList, Modal, StyleSheet, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewBox from './ReviewBox';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

const Stack = createNativeStackNavigator();
export default function Main({ navigation }) {

    const [modal, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: "Review 1", rating: '3/5', ratingInt: 3, body: "First review body", key: 1 },
        { title: "Review 2", rating: '3/5', ratingInt: 3, body: "Second review body", key: 2 },
        { title: "Review 3", rating: '4/5', ratingInt: 4, body: "Third review body", key: 3 },
        { title: "Review 4", rating: '4/5', ratingInt: 4, body: "Fourth review body", key: 4 },
    ])

    return (
        <View style={GlobalStyles.container}>
            
            <Modal visible={modal} animationType='slide'>
                <MaterialIcons
                    name="close"
                    size={24}
                    style={{...styles.modalToggle, ...styles.modalClose}}
                    onPress={() => setModalOpen(false)} />
                <View style={styles.modal}>
                    <ReviewForm />
                </View>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)} />

            <FlatList data={reviews} keyExtractor={item => item.key} renderItem={({ item }) => (
                <ReviewBox item={item} navigation={navigation} key={item.key} />
            )} />
        </View>

    )
}
const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        alignSelf: 'flex-end',
        marginRight: 20
    },
    modal: {
        flex: 1,
    }
})