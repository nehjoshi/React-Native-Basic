import React, {useState} from 'react';
import { StyleSheet, Text, Button, TextInput, View, Alert } from 'react-native';

export default function AddItem({addChore}) {
    const [text, setText] = useState("");

    const handleSubmit = () => {

        if(text.length === 0) {
            alert("Item can't be empty!");
            return null;
        }

        const chore = {title: text, id: Math.random()};
        addChore(chore);
        Alert.alert("Success", "Item added successfully!", [
            {text: "OK", onPress: () => console.log("Ok")}
        ]);
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Add new Item" onChangeText={text => setText(text)} style={styles.input}/>
            <View style={styles.button}><Button title="Add Item" onPress={handleSubmit}/></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#00bbff",
        padding: 10,
        marginVertical: 10,
        width: "80%"
    },
    button: {
        width: "80%"
    }
})
