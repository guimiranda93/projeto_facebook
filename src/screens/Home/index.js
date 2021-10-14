import React from 'react';
import {View, Pressable, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Pressable
        style={{backgroundColor: 'lightblue', width: 100, height: 30}}
        onPress={() => navigation.navigate('Posts')}>
        <Text>Ir para os posts</Text>
      </Pressable>
    </View>
  );
};

export default Home;
