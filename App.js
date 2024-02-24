import React from 'react';
import { SafeAreaView } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { loadFontsAsync } from './src/constants';
import AnimatedSplash from 'react-native-animated-splash-screen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

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
  <LinearGradient
   colors={['rgba(0,210,255,1)', 'rgba(58,123,213,100)']}
   onLayout={onLayoutRootView}
  >
   <SafeAreaView>
    <HomeScreen></HomeScreen>
   </SafeAreaView>
  </LinearGradient>
 );
}
