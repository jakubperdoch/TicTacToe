import { View, Image, Pressable } from 'react-native';
import styles from './styles';

function SymbolButton({ image, role, navigation }) {
 const pressHandler = (role) => {
  console.log('Pressed', role);
 };
 return (
  <View style={styles.SymbolButton_container}>
   <Pressable
    onPress={() =>
     navigation.navigate('Details', {
      player: role,
      choosen_symbol: image,
     })
    }
    style={({ pressed }) =>
     pressed
      ? [styles.SymbolButton, styles.SymbolButton_pressed]
      : styles.SymbolButton
    }
   >
    <Image style={styles.SymbolButton_image} source={image} />
   </Pressable>
  </View>
 );
}
export default SymbolButton;
