import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 44,
    color: '#4267B2',
  },
  author: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'right',
    color: '#555555',
  },
  text: {
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'justify',
  },
  border: {
    backgroundColor: '#4267B2',
    height: 1,
    width: '100%',
    marginVertical: 30,
    alignSelf: 'center',
  },
});
