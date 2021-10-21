import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import axios from 'axios';
import styles from './styles';

const Blog = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    buscarDados();
  }, []);

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

  return (
    <ScrollView style={styles.container}>
      {dados.length > 0 ? (
        <>
          {dados.map((item, index) => (
            <View key={index.toString()}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.text}>{item.content}</Text>
              <View style={styles.border} />
            </View>
          ))}
        </>
      ) : (
        <ActivityIndicator size={40} color="#4267B2" />
      )}
    </ScrollView>
  );
};

export default Blog;
