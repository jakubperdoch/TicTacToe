import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 PlayerCard: {
  backgroundColor: '#FCFBFC',
  width: 350,
  height: 40,
  borderRadius: 17,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 15,
  marginBottom: 15,
  shadowColor: '#000',
  shadowOffset: {
   height: 5,
  },
  shadowOpacity: 0.14,
  shadowRadius: 1.27,
 },
 PlayerName: {},
 PlayerStreakContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: 150,
 },
});

export default styles;
