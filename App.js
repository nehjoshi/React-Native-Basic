import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Navigator from './routes/HomeStack';
import React, { useState, useEffect } from 'react';

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
    <Navigator />
    </>
  );
}


