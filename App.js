import React, { useCallback, useState, useEffect } from 'react';
import { loadFontsAsync } from './src/constants';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function App() {
 const [appIsReady, setAppIsReady] = useState(false);

 useEffect(() => {
  async function prepare() {
   try {
    await loadFontsAsync();
   } catch (e) {
    console.warn(e);
   } finally {
    setAppIsReady(true);
   }
  }

  prepare();
 }, []);

 const onLayoutRootView = useCallback(async () => {
  if (appIsReady) {
   setTimeout(() => {
    SplashScreen.hideAsync();
   }, 1000);
  }
 }, [appIsReady]);

 if (!appIsReady) {
  return null;
 }

 return (
  <SafeAreaProvider onLayout={onLayoutRootView}>
   <Routes></Routes>
  </SafeAreaProvider>
 );
}
