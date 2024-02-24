import { View, Text } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

function DetailsScreen() {
 return (
  <SafeAreaView>
   <View style={styles.DetailsScreen}>
    <Text>DetailsScreen</Text>
   </View>
  </SafeAreaView>
 );
}

export default DetailsScreen;
