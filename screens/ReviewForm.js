import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { GlobalStyles } from '../styles/Global';

export default function ReviewForm() {
    return (
        <View style={GlobalStyles.container}>
            <Formik
                initialValues={{ title: '', rating: '', ratingInt: 0, body: '' }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            />
            {props => (
                <View>
                    <TextInput
                        style={GlobalStyles.input}
                        placeholder="Review Title"
                        onChange={props.handleChange('title')}
                        value={props.values.title} />

                    <TextInput
                        multiline
                        style={GlobalStyles.input}
                        placeholder="Rating (1-5)"
                        onChange={props.handleChange('rating')}
                        value={props.values.rating} />

                    <TextInput
                        style={GlobalStyles.input}
                        placeholder="Description"
                        onChange={props.handleChange('body')}
                        value={props.values.body} />

                    <Button title="submit" onPress={props.handleSubmit} />
                </View>
            )
            }
        </View>
    )
}
