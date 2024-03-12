import styles from './styles';
import { View, Text } from 'react-native';
function PlayerCard(props) {
 return (
  <View style={styles.PlayerCard}>
   <Text style={styles.PlayerName}>{props.player.name}</Text>
   <View style={styles.PlayerStreakContainer}>
    <Text style={styles.PlayerStreak}>Win: {props.player.win}</Text>
    <Text style={styles.PlayerStreak}>Lose: {props.player.lose}</Text>
   </View>
  </View>
 );
}

export default PlayerCard;
