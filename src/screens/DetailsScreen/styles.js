import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
 DetailsScreen: {
  height: '100%',

  justifyContent: 'space-around',
  alignItems: 'center',
 },
 DetailsScreen_title: {
  color: '#fff',
  fontFamily: 'Mont-Bold',
  fontSize: 40,
 },
 DetailsScreen_InputDesc: {
  color: '#fff',
  fontFamily: 'Mont-Regular',
  fontSize: 22,
 },
 DetailsScreen_inputContainer: {
  alignItems: 'center',
  gap: 20,
 },
 DetailsScreen_symbolContainer: {
  backgroundColor: '#fff',
  width: 120,
  height: 120,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
 },
 DetailsScreen_chosenSymbol: {
  height: 70,
  width: 70,
 },
});

export default styles;
