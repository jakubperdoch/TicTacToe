import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function GameScreen({ route, navigation }) {
 const { players } = route.params;

 return (
  <SafeAreaView>
   <View>
    <Text>GameScreen</Text>
    <Text>Players: {JSON.stringify(players)}</Text>
   </View>
  </SafeAreaView>
 );
}

export default GameScreen;
