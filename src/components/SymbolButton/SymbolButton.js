import { View, Image, Pressable } from 'react-native';
import styles from './styles';

function SymbolButton(props) {
 const pressHandler = (role) => {
  console.log('Pressed', role);
 };
 return (
  <View style={styles.SymbolButton_container}>
   <Pressable
    onPress={pressHandler.bind(this, props.role)}
    style={({ pressed }) =>
     pressed
      ? [styles.SymbolButton, styles.SymbolButton_pressed]
      : styles.SymbolButton
    }
   >
    <Image style={styles.SymbolButton_image} source={props.image} />
   </Pressable>
  </View>
 );
}
export default SymbolButton;
