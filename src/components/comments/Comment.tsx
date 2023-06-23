import {View, Text} from 'react-native';
import Antdesigns from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import colors from '../../theme/colors';

import { IComment } from '../../types/models';

interface IComments {
  comment:IComment
}

const Comment = ({comment}:IComments) => {
  return (
    <View style={styles.comments}>
      <Text style={styles.commentText}>
        <Text style={styles.username}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <Antdesigns
        name="hearto"
        size={12}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

export default Comment;
