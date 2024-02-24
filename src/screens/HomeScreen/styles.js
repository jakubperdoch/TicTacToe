import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 HomeScreen: {
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
 },
 HomeScreen_body: {
  justifyContent: 'space-evenly',
  height: '100%',
 },
 HomeScreen_pickSection: {
  alignItems: 'center',
  gap: 30,
 },
 HomeScreen_image: {
  alignSelf: 'flex-start',
  height: '60%',
 },
 HomeScreen_title: {
  color: '#fff',
  fontSize: 42,
  fontFamily: 'Mont-Bold',
 },
 HomeScreen_desc: {
  color: '#fff',
  fontSize: 24,
  fontFamily: 'Mont-Regular',
 },
 HomeScreen_buttonContainer: {
  flexDirection: 'row',
  gap: 30,
 },
});

export default styles;
