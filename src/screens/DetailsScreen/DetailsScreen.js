import { View, Text, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NameInput from '../../components/NameInput/NameInput';
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton';
import { useState, useEffect } from 'react';

function DetailsScreen({ route, navigation }) {
 const { player } = route.params;
 const [enteredPlayer, setEnteredPlayer] = useState([]);
 const [sign, setSign] = useState('');
 const [counter, setCounter] = useState(1);
 const [name, setName] = useState('');
 const [title, setTitle] = useState('Player 1');
 const [clearNameInput, setClearNameInput] = useState(false);

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

 function addPlayerHandler(enteredName) {
  const newPlayer = { name: enteredName, id: counter, symbol: sign };
  const updatedPlayers = [...enteredPlayer, newPlayer];
  setEnteredPlayer(updatedPlayers);
  setTitle('Player 2');
  if (player === 'cross' && counter >= 1) {
   setSign('ellipse');
  } else {
   setSign('cross');
  }
  setName('');
  setClearNameInput(true);
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

 function handleNameChange(newName) {
  setName(newName);
 }
 return (
  <SafeAreaView>
   <View style={styles.DetailsScreen}>
    <Text style={styles.DetailsScreen_title}>{title}</Text>
    <View style={styles.DetailsScreen_inputContainer}>
     <Text style={styles.DetailsScreen_InputDesc}>Enter Your Name </Text>
     <NameInput
      clearInput={clearNameInput}
      onNameChange={handleNameChange}
     ></NameInput>
    </View>
    <View style={styles.DetailsScreen_symbolContainer}>
     {chosenSymbol(sign)}
    </View>
    <ConfirmButton
     addPlayer={addPlayerHandler}
     playerName={name}
    ></ConfirmButton>
   </View>
  </SafeAreaView>
 );
}

export default DetailsScreen;
