import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
 DetailsScreen: {
  height: '100%',
  justifyContent: 'space-evenly',
  gap: 40,
  alignItems: 'center',
 },
 DetailsScreen_title: {
  color: '#FCFBFC',
  fontFamily: 'Mont-Bold',
  fontSize: 40,
 },
 DetailsScreen_InputDesc: {
  color: '#FCFBFC',
  fontFamily: 'Mont-Regular',
  fontSize: 22,
 },
 DetailsScreen_inputContainer: {
  alignItems: 'center',
  gap: 20,
 },
 DetailsScreen_symbolContainer: {
  backgroundColor: '#FCFBFC',
  width: 120,
  height: 120,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
 },
 DetailsScreen_chosenSymbol: {
  height: 60,
  width: 60,
 },
});

export default styles;
