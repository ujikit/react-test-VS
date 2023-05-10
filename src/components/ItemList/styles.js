//package import
import {StyleSheet} from 'react-native';

//local import

export default StyleSheet.create({
  wrapItem: {
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  height198: {height: 198},
  wrapContentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  wrapTotalLike: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D5D5D5',
  },
  totalLike: {
    paddingHorizontal: 24,
    paddingVertical: 9,
    color: '#707070',
  },
  wrapLikeAndDislike: {
    flexDirection: 'row',
    paddingRight: 21,
  },
  wrapLike: {backgroundColor: '#2B72C4', borderRadius: 10},
  textLike: {
    paddingHorizontal: 24,
    paddingVertical: 9,
    color: '#FFFFFF',
  },
  wrapDislike: {
    backgroundColor: '#DB2C2C',
    borderRadius: 10,
    marginLeft: 8,
  },
  textDislike: {
    paddingHorizontal: 24,
    paddingVertical: 9,
    color: '#FFFFFF',
  },
});
