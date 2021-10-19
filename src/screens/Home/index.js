import React from 'react';
import {View, Pressable, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: 'lightblue',
          width: 150,
          height: 30,
          margin: 30,
        }}
        onPress={() => navigation.navigate('Posts')}>
        <Text>Ir para os posts</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: 'lightblue',
          width: 150,
          height: 30,
          margin: 30,
        }}
        onPress={() => navigation.navigate('Profile')}>
        <Text>Ir para o perfil</Text>
      </Pressable>
    </View>
  );
};

export default Home;
