import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';
import { getData } from '../../store/store';

function ScoreBoardScreen({ navigation }) {
 useEffect(() => {
  const fetchData = async () => {
   try {
    const data = await getData();
    console.log(data);
   } catch (err) {
    console.log(err);
   }
  };
  fetchData();
 }, []);

 return (
  <SafeAreaView>
   <View style={styles.ScoreBoardScreen}>
    <Text>ScoreBoardScreen</Text>
   </View>
   <Footer navigation={navigation}></Footer>
  </SafeAreaView>
 );
}

export default ScoreBoardScreen;
