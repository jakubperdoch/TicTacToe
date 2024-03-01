import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameDesk from '../../components/GameDesk/GameDesk';
import styles from './styles';
import { useState } from 'react';
import { useEffect } from 'react';

function GameScreen({ route, navigation }) {
 const { players } = route.params;
 const [player1, player2] = players;
 const [currentSymbol, setCurrentSymbol] = useState('');
 const [currentTitle, setCurrentTitle] = useState('');

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

 useEffect(() => {
  setCurrentSymbol(player_1.symbol);
  setCurrentTitle('Player 1');
 }, [player_1.symbol]);

 function swicthPlayerHandler(symbol) {
  if (symbol === player_1.symbol) {
   setCurrentSymbol(player_2.symbol);
   setCurrentTitle('Player 2');
  } else if (symbol === player_2.symbol) {
   setCurrentSymbol(player_1.symbol);
   setCurrentTitle('Player 1');
  }
 }

 return (
  <SafeAreaView>
   <View style={styles.GameScreen}>
    <Text style={styles.GameScreen_title}>{currentTitle}’s Turn</Text>
    <GameDesk
     symbol={currentSymbol}
     swicthPlayerHandler={swicthPlayerHandler}
    ></GameDesk>
   </View>
  </SafeAreaView>
 );
}

export default GameScreen;
