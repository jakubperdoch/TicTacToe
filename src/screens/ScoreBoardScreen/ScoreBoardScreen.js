import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../components/Footer/Footer';

function ScoreBoardScreen({ navigation }) {
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
