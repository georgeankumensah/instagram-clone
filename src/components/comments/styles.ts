import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 18,
  },
  commentText: {
    color: colors.black,
    flex: 1,
  },
  username: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  icon: {
    marginHorizontal: 5,
  },
});
