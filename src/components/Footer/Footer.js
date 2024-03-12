import { View, TouchableOpacity } from 'react-native';
import TeamIcon from '../../assets/images/team-icon.svg';
import GamePadIcon from '../../assets/images/gamepad-icon.svg';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

function Footer({ navigation }) {
 const route = useRoute();
 console.log(route.name);
 return (
  <View style={styles.Footer}>
   <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <GamePadIcon
     style={route.name == 'Home' ? { color: '#fff' } : { color: '#004352' }}
    />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => navigation.navigate('ScoreBoard')}>
    <TeamIcon
     style={
      route.name == 'ScoreBoard' ? { color: '#fff' } : { color: '#004352' }
     }
    />
   </TouchableOpacity>
  </View>
 );
}

export default Footer;
