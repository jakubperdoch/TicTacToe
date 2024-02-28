import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';

function ConfirmButton({ addPlayer, playerName }) {
 
 function addPlayerHandler() {
  if (playerName.trim() !== '' && playerName != null) {
   addPlayer(playerName);
  }
 }

 return (
  <View style={styles.ConfirmButton}>
   <Pressable
    onPress={addPlayerHandler}
    style={({ pressed }) =>
     pressed
      ? [styles.ConfirmButton_pressed, styles.ConfirmButton]
      : styles.ConfirmButton
    }
   >
    <Image
     style={styles.ConfirmButton_icon}
     source={require('../../assets/images/check-icon.png')}
    />
    <Text style={styles.ConfirmButton_text}>Confirm</Text>
   </Pressable>
  </View>
 );
}

export default ConfirmButton;
