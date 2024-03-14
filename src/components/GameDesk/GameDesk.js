import styles from './styles';
import { View, ImageBackground } from 'react-native';
import GameDeskButton from '../GameDeskButton/GamedDeskButton';
import { useEffect, useState } from 'react';

function GameDesk(props) {
 const [deskArray, setDeskArray] = useState(
  Array.from({ length: 9 }, (_, i) => ({
   id: i,
   SymbolImage: '',
  }))
 );

 function checkPlayerHandler() {
  const desk = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [6, 4, 2],
  ];

  let isTie = true;

  for (let condition of desk) {
   const [a, b, c] = condition;
   const buttonA = deskArray.find((button) => button.id === a);
   const buttonB = deskArray.find((button) => button.id === b);
   const buttonC = deskArray.find((button) => button.id === c);
   if (
    buttonA.SymbolImage === buttonB.SymbolImage &&
    buttonA.SymbolImage === buttonC.SymbolImage &&
    buttonA.SymbolImage !== ''
   ) {
    props.onWinnerFoundHandler(
     buttonA.SymbolImage ? props.player1.name : props.player2.name
    );
    props.changeTitleHandler(
     `Winner is ${
      buttonA.SymbolImage ? props.player1.name : props.player2.name
     }!`
    );
    return;
   }
   if (
    buttonA.SymbolImage === '' ||
    buttonB.SymbolImage === '' ||
    buttonC.SymbolImage === ''
   ) {
    isTie = false;
   }
  }
  if (isTie) {
   props.changeTitleHandler("It's a tie!");
   props.onTieHandler();
  }
 }

 function onChangeHandler(id, symbol) {
  const updatedDeskArray = deskArray.map((item) => {
   if (
    item.id === id &&
    (item.SymbolImage === '' || item.SymbolImage === null)
   ) {
    return { ...item, SymbolImage: symbol };
   }
   return item;
  });
  setDeskArray(updatedDeskArray);
 }

 useEffect(() => {
  checkPlayerHandler();
 }, [props.symbol]);

 return (
  <View style={styles.GameDeskContainer}>
   <View style={styles.GameDesk}>
    {deskArray.map((button) => (
     <GameDeskButton
      key={button.id}
      id={button.id}
      symbol={props.symbol}
      isWinner={props.isWinner}
      switchPlayerHandler={props.switchPlayerHandler}
      onChangeHandler={onChangeHandler}
     ></GameDeskButton>
    ))}
   </View>
  </View>
 );
}

export default GameDesk;
