import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Home from './screens/Home';


export default function App() {

  const [loaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!loaded){
      return null;
  }
  return (
    <>
    <Home />
    </>
  );
}


