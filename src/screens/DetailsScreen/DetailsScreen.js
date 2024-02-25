import { View, Text, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NameInput from '../../components/NameInput/NameInput';
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton';
import { useState } from 'react';

function DetailsScreen({ route, navigation }) {
 const { player } = route.params;
 const [enteredPlayer, setEnteredPlayer] = useState([]);
 const [counter, setCounter] = useState(1);
 const [name, setName] = useState('');
 const [title, setTitle] = useState('Player 1');
 //  const storeData = async (value) => {
 //   try {
 //    const jsonValue = JSON.stringify(value);
 //    await AsyncStorage.setItem('my-key', jsonValue);
 //   } catch (e) {}
 //  };

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
  console.log(counter);
  console.log(enteredName);
  setEnteredPlayer((currentPlayers) => [
   ...currentPlayers,
   { name: enteredName, id: counter },
  ]);
  setCounter((prevCounter) => prevCounter + 1);
  setTitle('Player 2');
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
     <NameInput onNameChange={handleNameChange}></NameInput>
    </View>
    <View style={styles.DetailsScreen_symbolContainer}>
     {chosenSymbol(player)}
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
