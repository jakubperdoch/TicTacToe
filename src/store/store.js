import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
 try {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem('PlayersBoard', jsonValue);
 } catch (err) {
  console.log(err);
  console.log('ccc');
 }
};

export const getData = async () => {
 try {
  const jsonValue = await AsyncStorage.getItem('PlayersBoard');
  return jsonValue != null ? JSON.parse(jsonValue) : null;
 } catch (err) {}
};
