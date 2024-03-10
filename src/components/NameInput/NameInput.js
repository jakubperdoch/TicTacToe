import { TextInput, Text } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';

function NameInput({ enteredName, onNameChange }) {
 return (
  <TextInput
   value={enteredName}
   spellCheck={false}
   autoCorrect={false}
   onChangeText={onNameChange}
   placeholder="Your Name"
   style={styles.NameInput}
  ></TextInput>
 );
}

export default NameInput;
