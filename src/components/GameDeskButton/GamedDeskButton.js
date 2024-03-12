import styles from './styles';
import { View, Image, Pressable } from 'react-native';
import { useState } from 'react';

function GameDeskButton(props) {
 const [currentSymbol, setCurrentSymbol] = useState('');

 function onPressHandler() {
  if (!props.isWinner && currentSymbol === '') {
   setCurrentSymbol(props.symbol);
   props.switchPlayerHandler(props.symbol);
   props.onChangeHandler(props.id, props.symbol);
  }
 }

 return (
  <Pressable onPress={onPressHandler.bind(this, props.id, props.symbol)}>
   <View style={styles.GameDeskButton}>
    <Image
     source={
      currentSymbol === 'cross'
       ? require('../../assets/images/cross-icon.png')
       : currentSymbol === 'ellipse'
       ? require('../../assets/images/ellipse-icon.png')
       : null
     }
    />
   </View>
  </Pressable>
 );
}

export default GameDeskButton;
