import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <View>
      <Text style={[styles.text, styles.text1]}>Hello World</Text>

      <Text style={[styles.text, styles.text2]}>Hello World 2</Text>
    </View>
  );
};

export default App;
