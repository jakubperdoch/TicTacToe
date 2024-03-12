import { View, Text, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import NameInput from '../../components/NameInput/NameInput';
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton';
import { useState, useEffect } from 'react';
import IconButton from '../../components/IconButton/IconButton';

function DetailsScreen({ route, navigation }) {
 const { player } = route.params;
 const [enteredPlayer, setEnteredPlayer] = useState([]);
 const [sign, setSign] = useState('');
 const [counter, setCounter] = useState(1);
 const [title, setTitle] = useState('Player 1');
 const [enteredName, setEnteredName] = useState('');

 useEffect(() => {
  setSign(player);
 }, []);

 const chosenSymbol = (symbol) => {
  if (typeof symbol === 'string' && symbol.trim() === 'cross') {
   return (
    <Image
     style={styles.DetailsScreen_chosenSymbol}
     source={require('../../assets/images/cross-icon.png')}
    />
   );
  } else {
   return (
    <Image
     style={styles.chosenSymbol}
     source={require('../../assets/images/ellipse-icon.png')}
    />
   );
  }
 };

 function onReturnHandler() {
  if (title == 'Player 1') {
   navigation.navigate('Home');
  } else {
   setTitle('Player 1');
   setEnteredPlayer([]);
   setSign(player);
   setCounter(1);
   clearInputHandler();
  }
 }

 function addPlayerHandler(enteredName) {
  const newPlayer = { name: enteredName, symbol: sign };
  const updatedPlayers = [...enteredPlayer, newPlayer];
  setEnteredPlayer(updatedPlayers);
  setTitle('Player 2');
  if (player === 'cross' && counter >= 1) {
   setSign('ellipse');
  } else {
   setSign('cross');
  }
  clearInputHandler();
  setCounter((prevCounter) => prevCounter + 1);
  finishedInputsHandler(updatedPlayers);
 }

 function finishedInputsHandler(updatedPlayers) {
  if (updatedPlayers.length >= 2) {
   navigation.navigate('Game', {
    players: updatedPlayers,
   });
  }
 }

 function nameInputHandler(enteredName) {
  setEnteredName(enteredName);
 }
 function clearInputHandler() {
  setEnteredName('');
 }

 return (
  <SafeAreaView>
   <IconButton
    icon={
     title == 'Player 1'
      ? require('../../assets/images/close-icon.png')
      : require('../../assets/images/arrow-left.png')
    }
    onPressHandler={onReturnHandler}
   ></IconButton>
   <View style={styles.DetailsScreen}>
    <Text style={styles.DetailsScreen_title}>{title}</Text>
    <View style={styles.DetailsScreen_inputContainer}>
     <Text style={styles.DetailsScreen_InputDesc}>Enter Your Name </Text>
     <NameInput
      enteredName={enteredName}
      onNameChange={nameInputHandler}
     ></NameInput>
    </View>
    <View style={styles.DetailsScreen_symbolContainer}>
     {chosenSymbol(sign)}
    </View>
    <ConfirmButton
     addPlayer={addPlayerHandler}
     playerName={enteredName}
    ></ConfirmButton>
   </View>
  </SafeAreaView>
 );
}

export default DetailsScreen;
