import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ReviewDetails from '../screens/ReviewDetails'
import ReviewBox from '../screens/ReviewBox';
import Home from '../screens/Main';

const Stack = createStackNavigator();
export default function Navigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
            <Stack.Screen name="ReviewBox" component={ReviewBox} />
        </Stack.Navigator>
    )
}