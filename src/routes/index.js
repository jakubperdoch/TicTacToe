import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import GameScreen from '../screens/GameScreen/GameScreen';
import ScoreBoardScreen from '../screens/ScoreBoardScreen/ScoreBoardScreen';

function Routes() {
 const Stack = createNativeStackNavigator();

 const Reset = {
  dark: false,
  colors: {
   primary: 'rgb(255, 255, 255)',
   background: 'rgba(32, 172, 203, 1)',
   card: 'rgb(255, 255, 255)',
   text: 'rgb(255, 255, 255)',
   border: 'rgb(255, 255, 255)',
   notification: '#ff453a',
  },
 };
 return (
  <NavigationContainer theme={Reset}>
   <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
   >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
    <Stack.Screen name="Game" component={GameScreen} />
    <Stack.Screen name="ScoreBoard" component={ScoreBoardScreen} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

export default Routes;
