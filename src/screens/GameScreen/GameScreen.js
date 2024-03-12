import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameDesk from '../../components/GameDesk/GameDesk';
import styles from './styles';
import { useState } from 'react';
import { useEffect } from 'react';
import TitleButton from '../../components/TitleButton/TitleButton';
import { getData, storeData } from '../../store/store';

function GameScreen({ route, navigation }) {
 const { players } = route.params;
 const [player1, player2] = players;
 const [currentSymbol, setCurrentSymbol] = useState('');
 const [currentTitle, setCurrentTitle] = useState('');
 const [isWinner, setIsWinner] = useState(false);

 const player_1 = {
  name: player1.name,
  symbol: player1.symbol,
  win: player1.win,
  lose: player1.lose,
 };

 const player_2 = {
  name: player2.name,
  symbol: player2.symbol,
  win: player2.win,
  lose: player2.lose,
 };

 useEffect(() => {
  setCurrentSymbol(player_1.symbol);
  setCurrentTitle(`${player_1.name}’s Turn`);
 }, [player_1.symbol]);

 function switchPlayerHandler(symbol) {
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

 const storePlayersHandler = async (winner) => {
  try {
   const data = (await getData()) || [];
   const PlayersBoard = [...data, player_1, player_2];
   const seenNames = new Set();

   let uniquePlayers = PlayersBoard.filter((player) => {
    if (!seenNames.has(player.name)) {
     seenNames.add(player.name);
     return true;
    }
    return false;
   });

   uniquePlayers.forEach((player) => {
    if (player.name === player_1.name || player.name === player_2.name) {
     if (player.name === winner) {
      player.win = (player.win || 0) + 1;
      player.lose = player.lose || 0;
     } else {
      player.lose = (player.lose || 0) + 1;
      player.win = player.win || 0;
     }
    }
   });
   console.log(uniquePlayers);
   storeData(uniquePlayers);
  } catch (err) {
   console.log(err);
   console.log('bbb');
  }
 };

 function onWinnerFoundHandler(winner) {
  setIsWinner(true);
  storePlayersHandler(winner);
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
     switchPlayerHandler={switchPlayerHandler}
     changeTitleHandler={changeTitleHandler}
     returnHomeHandler={returnHomeHandler}
     onWinnerFoundHandler={onWinnerFoundHandler}
    ></GameDesk>
    <View style={styles.GameScreen_buttonContainer}>
     {returnHomeHandler(isWinner)}
    </View>
   </View>
  </SafeAreaView>
 );
}

export default GameScreen;
