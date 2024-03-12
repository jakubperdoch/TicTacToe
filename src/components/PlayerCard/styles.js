import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 PlayerCard: {
  backgroundColor: '#fff',
  width: 350,
  height: 40,
  borderRadius: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 15,
  marginBottom: 15,
 },
 PlayerName: {},
 PlayerStreakContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: 150,
 },
 PlayerStreak: {},
});

export default styles;
