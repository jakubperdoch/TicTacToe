import styles from './styles';
import { TouchableOpacity, Image } from 'react-native';

function IconButton({ icon, onPressHandler }) {
 return (
  <TouchableOpacity onPress={onPressHandler} style={styles.IconButton}>
   <Image source={icon} style={styles.IconButton_icon} />
  </TouchableOpacity>
 );
}

export default IconButton;
