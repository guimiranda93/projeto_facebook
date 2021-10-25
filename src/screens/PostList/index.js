import React, {useEffect, useState} from 'react'; // Linha alterada
import {ScrollView, View, Text, Pressable} from 'react-native';
import axios from 'axios';
import styles from './styles';

const PostList = ({navigation}) => {
  const [dados, setDados] = useState([]); // Linha alterada

  useEffect(() => {
    buscarDados();
  }, []);

  // Função abaixo alterada
  const buscarDados = () => {
    axios
      .get('https://fakerapi.it/api/v1/texts?_quantity=5&_characters=1500')
      .then(retorno => {
        setDados(retorno.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Listagem dos posts alterada
  return (
    <ScrollView style={styles.container}>
      {dados.map((item, index) => (
        <View key={index.toString()} style={styles.card}>
          <Pressable
            onPress={() => navigation.navigate('PostDetails', {post: item})}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.author}</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default PostList;
