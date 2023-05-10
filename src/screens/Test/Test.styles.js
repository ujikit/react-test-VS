//package import
import {StyleSheet} from 'react-native';

const TestStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginHorizontal: 12,
  },
  wrapActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  buttonLikeAll: {borderRadius: 10, backgroundColor: '#2B72C4'},
  buttonResetAll: {borderRadius: 10, backgroundColor: '#FFFFFF'},
  buttonDislikeAll: {borderRadius: 10, backgroundColor: '#DB2C2C'},
  textLikeAndDislikeAll: {
    paddingHorizontal: 24,
    paddingVertical: 9,
    color: '#FFFFFF',
  },
  textResetAll: {
    paddingHorizontal: 24,
    paddingVertical: 9,
    color: '#5F5F5F',
  },
});

export default TestStyles;
