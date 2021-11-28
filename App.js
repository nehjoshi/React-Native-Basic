import { useFonts } from 'expo-font';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./screens/Main";
import About from "./screens/About";
import ReviewDetails from './screens/ReviewDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  )
}

export default function App() {

  const Drawer = createDrawerNavigator();
  const [loaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


