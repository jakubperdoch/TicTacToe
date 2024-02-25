import { TextInput, Text } from 'react-native';
import { useState } from 'react';
import styles from './styles';

function NameInput(props) {
 const [enteredName, setEnteredName] = useState('');

 function nameInputHandler(enteredText) {
  setEnteredName(enteredText);
  props.onNameChange(enteredText);
 }

 return (
  <TextInput
   value={enteredName}
   onChangeText={nameInputHandler}
   placeholder="Your Name"
   style={styles.NameInput}
  ></TextInput>
 );
}

export default NameInput;
