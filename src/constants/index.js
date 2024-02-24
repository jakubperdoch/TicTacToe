import * as Font from 'expo-font';

export const loadFontsAsync = async () => {
 await Font.loadAsync({
  'Mont-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  'Mont-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
 });
};
