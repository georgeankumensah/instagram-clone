import {View,ScrollView,Text,StyleSheet} from 'react-native';
import FeedPost from './src/components/FeedPost/FeedPost';



const App = () => {
return (
    <View style={styles.container}>
      <ScrollView>
        <FeedPost />
        <FeedPost />
      </ScrollView>

    </View>
);
}

export default App;

const styles = StyleSheet.create({
container: {
  flex: 1,
},});