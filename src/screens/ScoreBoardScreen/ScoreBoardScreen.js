import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { getData } from '../../store/store';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

function ScoreBoardScreen({ navigation }) {
 const [players, setPlayers] = useState([]);
 useEffect(() => {
  const fetchData = async () => {
   try {
    const data = await getData();
    setPlayers(data);
   } catch (err) {
    console.log(err);
    console.log('aaa');
   }
  };
  fetchData();
 }, []);

 return (
  <SafeAreaView>
   <View style={styles.ScoreBoardScreen}>
    <Text style={styles.ScoreBoardScreen_title}>Player's Stats</Text>
    <View>
     <FlatList
      data={players}
      style={styles.listContainer}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <PlayerCard player={item} />}
     />
    </View>
   </View>
   <Footer navigation={navigation}></Footer>
  </SafeAreaView>
 );
}

export default ScoreBoardScreen;
