import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameDesk from '../../components/GameDesk/GameDesk';
import styles from './styles';
import { useState } from 'react';
import { useEffect } from 'react';
import TitleButton from '../../components/TitleButton/TitleButton';

function GameScreen({ route, navigation }) {
 const { players } = route.params;
 const [player1, player2] = players;
 const [currentSymbol, setCurrentSymbol] = useState('');
 const [currentTitle, setCurrentTitle] = useState('');
 const [isWinner, setIsWinner] = useState(false);

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
  setCurrentTitle(`${player_1.name}’s Turn`);
 }, [player_1.symbol]);

 function swictchPlayerHandler(symbol) {
  if (symbol === player_1.symbol) {
   setCurrentSymbol(player_2.symbol);
   setCurrentTitle(`${player_2.name}’s Turn`);
  } else if (symbol === player_2.symbol) {
   setCurrentSymbol(player_1.symbol);
   setCurrentTitle(`${player_1.name}’s Turn`);
  }
 }

 function changeTitleHandler(title) {
  setCurrentTitle(title);
 }

 function onWinnerFoundHandler() {
  setIsWinner(true);
 }

 function returnHomeHandler(isWinner) {
  if (isWinner) {
   return (
    <TitleButton
     navigation={navigation}
     destination={'Home'}
     buttonTitle={'Return Home'}
    />
   );
  } else {
   return null;
  }
 }

 return (
  <SafeAreaView>
   <View style={styles.GameScreen}>
    <Text style={styles.GameScreen_title}>{currentTitle}</Text>
    <GameDesk
     symbol={currentSymbol}
     player1={player_1}
     player2={player_2}
     isWinner={isWinner}
     swicthPlayerHandler={swictchPlayerHandler}
     changeTitleHandler={changeTitleHandler}
     returnHomeHandler={returnHomeHandler}
     onWinnerFoundHandler={onWinnerFoundHandler}
    ></GameDesk>
    <View style={styles.GameScreen_buttonContainer}>{returnHomeHandler(isWinner)}</View>
   </View>
  </SafeAreaView>
 );
}

export default GameScreen;
