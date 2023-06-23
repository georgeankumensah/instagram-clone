import {useState} from 'react';
import {Text, View,  Image} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Antdesigns from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

const FeedPost = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.post}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.username}>Blaccgeorge</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />
      {/* footer*/}

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Antdesigns
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            color={isLiked ? colors.red : colors.black}
            style={styles.icon}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        <Text style={styles.text}>
          Liked by <Text style={styles.username}>Blaccgeorge</Text> and{' '}
          <Text style={styles.username}>66 others</Text>
        </Text>
        {/* caption */}
        <Text style={styles.text}>
          <Text style={styles.username}>Blaccgeorge</Text> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam, voluptatum.
        </Text>
        {/* comments */}
        <Text>View all 20 comments</Text>
        <View style={styles.comments}>
          <Text style={styles.commentText}>
            <Text style={styles.username}>Blaccgeorge</Text> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </Text>
          <Antdesigns
            name="hearto"
            size={12}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        {/* post date */}
        <Text >1 hour ago</Text>
      </View>
    </View>
  );
};
export default FeedPost;

