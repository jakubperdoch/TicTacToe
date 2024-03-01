import styles from './styles';
import { View } from 'react-native';
import GameDeskButton from '../GameDeskButton/GamedDeskButton';
import { useEffect, useState } from 'react';

function GameDesk(props) {
 const [deskArray, setDeskArray] = useState(
  Array.from({ length: 9 }, (_, i) => ({
   id: i,
   SymbolImage: '',
  }))
 );
 const [isWinner, setIsWinner] = useState(false);

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
    setIsWinner(true);
    console.log('Winner', buttonA.SymbolImage);
   } else {
    continue;
   }
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

 useEffect(() => {
  console.log(isWinner);
 }, [isWinner]);

 return (
  <View style={styles.GameDeskContainer}>
   <View style={styles.GameDesk}>
    {deskArray.map((button) => (
     <GameDeskButton
      key={button.id}
      id={button.id}
      symbol={props.symbol}
      isWinner={isWinner}
      swicthPlayerHandler={props.swicthPlayerHandler}
      onChangeHandler={onChangeHandler}
     ></GameDeskButton>
    ))}
   </View>
  </View>
 );
}

export default GameDesk;
