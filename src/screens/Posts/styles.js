import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  postImage: {
    width: width,
    height: 300,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },
  time: {
    fontSize: 14,
    color: '#555555',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#222222',
    marginVertical: 15,
  },
  textButton: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555555',
  },
  likesCount: {
    fontSize: 14,
    color: '#555555',
    marginVertical: 15,
  },
  buttonRow: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#D8D8D8',
  },
  buttonFooter: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
