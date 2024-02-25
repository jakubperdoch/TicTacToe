import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 ConfirmButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,
  borderRadius: 15,
  backgroundColor: '#fff',
  width: 300,
  height: 40,
 },
 ConfirmButton_icon: {
  height: 11,
  width: 14,
 },
 ConfirmButton_text: {
  fontFamily: 'Mont-Regular',
  fontSize: 13,
 },
 ConfirmButton_pressed: {
  opacity: 0.75,
 },
});

export default styles;
