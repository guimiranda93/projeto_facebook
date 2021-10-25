import React, {useContext} from 'react';
import {View, Pressable, Text} from 'react-native';
import AuthContext from '../../contexts/auth';

const Home = () => {
  const {signOut} = useContext(AuthContext);
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: 'lightblue',
          width: 150,
          height: 30,
          margin: 30,
        }}
        onPress={() => signOut()}>
        <Text>Deslogar</Text>
      </Pressable>
    </View>
  );
};

export default Home;
