import { View, Text, ImageBackground } from 'react-native';
import SymbolButton from '../../components/SymbolButton/SymbolButton';
import styles from './styles';

function HomeScreen() {
 const buttons = [
  {
   image: require('../../assets/images/cross-icon.png'),
   role: 'cross',
  },
  {
   image: require('../../assets/images/ellipse-icon.png'),
   role: 'ellipse',
  },
 ];
 return (
  <ImageBackground
   source={require('../../assets/images/background-image.png')}
   resizeMode="contain"
   style={styles.HomeScreen}
   imageStyle={styles.HomeScreen_image}
  >
   <View style={styles.HomeScreen_body}>
    <Text style={styles.HomeScreen_title}>TIC-TAC-TOE</Text>
    <View style={styles.HomeScreen_pickSection}>
     <Text style={styles.HomeScreen_desc}>Pick who goes first?</Text>

     <View style={styles.HomeScreen_buttonContainer}>
      {/* Dva custom buttony pre vyber X | O  */}
      {buttons.map((button, index) => {
       return (
        <SymbolButton
         key={index}
         image={button.image}
         role={button.role}
        ></SymbolButton>
       );
      })}
     </View>
    </View>
   </View>
  </ImageBackground>
 );
}

export default HomeScreen;
