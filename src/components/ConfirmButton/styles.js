import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 ConfirmButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  borderRadius: 17,
  backgroundColor: '#FCFBFC',
  width: 300,
  height: 45,
 },
 ConfirmButton_icon: {
  height: 13,
  width: 16,
 },
 ConfirmButton_text: {
  fontFamily: 'Mont-Regular',
  fontSize: 15,
 },
 ConfirmButton_pressed: {
  opacity: 0.75,
 },
});

export default styles;
