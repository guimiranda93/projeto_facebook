import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  container: {
    height: height - 50,
    width: width,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeContainer: {
    backgroundColor: '#4267B2',
    width: 24,
    height: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  like: {
    color: 'white',
  },
  heartContainer: {
    marginLeft: -8,
    backgroundColor: 'red',
    width: 24,
    height: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    color: 'white',
  },
  likeCounter: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  inputContainer: {
    padding: 10,
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 20,
    backgroundColor: '#D8D8D8',
    padding: 10,
    marginTop: 'auto',
  },
  comments: {
    flex: 1,
  },
});
