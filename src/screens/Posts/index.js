import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonFooter from '../../components/ButtonFooter';
import styles from './styles';

const Posts = () => {
  const [liked, setLiked] = useState(false);

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
            <Text style={styles.time}>
              <Icon name="clockcircleo" style={styles.iconTime} /> 10hrs
            </Text>
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
          <ButtonFooter text="Curtir" icon={liked ? 'like1' : 'like2'} />
          <ButtonFooter text="Comentar" icon="message1" />
          <ButtonFooter text="Compartilhar" icon="sharealt" />
        </View>
      </View>
    </>
  );
};

export default Posts;
