import { TextInput, Text } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';

function NameInput(props) {
 const [enteredName, setEnteredName] = useState('');

 useEffect(() => {
  if (props.clearInput) {
   setEnteredName('');
  }
 }, [props.clearInput]);

 function nameInputHandler(enteredText) {
  setEnteredName(enteredText);
  props.onNameChange(enteredText);
 }

 return (
  <TextInput
   value={enteredName}
   spellCheck={false}
   autoCorrect={false}
   onChangeText={nameInputHandler}
   placeholder="Your Name"
   style={styles.NameInput}
  ></TextInput>
 );
}

export default NameInput;
