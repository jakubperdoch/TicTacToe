import { StyleSheet, Text, View, Animated } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { loadFontsAsync } from './src/constants/index';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
 const [fontsLoaded, setFontsLoaded] = useState(false);
 const fadeAnimation = new Animated.Value(1);

 const loadFonts = useCallback(async () => {
  try {
   await loadFontsAsync();
   setFontsLoaded(true);
  } catch (error) {
   console.log(error);
  }
 }, []);

 useEffect(() => {
  loadFonts();
 }, []);

 const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
   await SplashScreen.hideAsync();
  }
 }, [fontsLoaded]);

 if (!fontsLoaded) {
  return null;
 }

 return (
  <View onLayout={onLayoutRootView}>
   <Text>Ahoj</Text>
  </View>
 );
}
