import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'; // Fontes


import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading'; // Para esperar carregar 

export default function App() {
  // carregar fontes.
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}