import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const Posts = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <View>
            <Text style={styles.name}>Guilherme M Miranda</Text>
            <Text style={styles.time}>10hrs</Text>
          </View>
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          iaculis congue ligula. Ut molestie arcu nec nulla lobortis placerat.
          Aliquam tempus tellus in tortor efficitur, eget pharetra erat
          pellentesque.
        </Text>
      </View>

      <Image
        style={styles.postImage}
        source={{
          uri: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2019/10/imagemn-escolhida-artigo-e1571255765939-1280x720.jpg',
        }}
      />

      <View style={styles.container}>
        <Text style={styles.likesCount}>62 curtidas</Text>

        <View style={styles.line} />

        <View style={styles.buttonRow}>
          <Pressable style={styles.buttonFooter}>
            <Text style={styles.textButton}>Curtir</Text>
          </Pressable>

          <Pressable style={styles.buttonFooter}>
            <Text style={styles.textButton}>Comentar</Text>
          </Pressable>

          <Pressable style={styles.buttonFooter}>
            <Text style={styles.textButton}>Compartilhar</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Posts;
