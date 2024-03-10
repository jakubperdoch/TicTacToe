import styles from './styles';
import { TouchableOpacity, Text } from 'react-native';
function TitleButton({ buttonTitle, destination, navigation }) {
 return (
  <TouchableOpacity
   style={styles.titleButton}
   onPress={() => navigation.navigate(destination)}
  >
   <Text style={styles.buttonTitle_text}>{buttonTitle}</Text>
  </TouchableOpacity>
 );
}

export default TitleButton;
