import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameDesk from '../../components/GameDesk/GameDesk';

function GameScreen({ route, navigation }) {
 const { players } = route.params;
 const [player1, player2] = players;

 const player_1 = {
  name: player1.name,
  id: player1.id,
  symbol: player1.symbol,
 };

 const player_2 = {
  name: player2.name,
  id: player2.id,
  symbol: player2.symbol,
 };
 return (
  <SafeAreaView>
   <View>
    <Text>
     Player 1’s Turn {player_1.name} ,{player_2.name}
    </Text>
    <GameDesk></GameDesk>
   </View>
  </SafeAreaView>
 );
}

export default GameScreen;
