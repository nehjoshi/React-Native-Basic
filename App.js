import { useFonts } from 'expo-font';
import  React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import About from "./screens/About";

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


