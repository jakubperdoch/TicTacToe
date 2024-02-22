import { StyleSheet, Text, View, Animated } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { loadFontsAsync } from './src/constants/index';
import * as SplashScreen from 'expo-splash-screen';
import AnimatedSplash from 'react-native-animated-splash-screen';

export default function App() {
 const [fontsLoaded, setFontsLoaded] = useState(false);

 useEffect(() => {
  loadFonts();
  console.log(fontsLoaded);
 }, []);

 const loadFonts = useCallback(async () => {
  try {
   await loadFontsAsync();
   setFontsLoaded(true);
  } catch (error) {
   console.log(error);
  }
 }, []);

 return (
  <AnimatedSplash
   isLoaded={fontsLoaded}
   logoImage={require('./src/assets/images/SplashScreen/splashScreen--light.png')}
   backgroundColor={'#fff'}
   logoHeight={500}
   logoWidth={500}
  >
   <View>
    <Text>Ahoj</Text>
   </View>
  </AnimatedSplash>
 );
}
