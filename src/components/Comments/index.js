import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from './styles';

const Comments = ({onClose}) => {
  return (
    <Pressable onPress={() => onClose()} style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header1}>
            <View style={styles.likeContainer}>
              <Icon name="like1" size={12} style={styles.like} />
            </View>
            <View style={styles.heartContainer}>
              <Icon name="heart" size={12} style={styles.heart} />
            </View>
            <Text style={styles.likeCounter}>37</Text>
            <Icon name="right" size={24} />
          </View>
          <Icon name="like2" size={24} />
        </View>
        <View style={styles.comments} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escreva um comentário..."
          />
        </View>
      </View>
    </Pressable>
  );
};

export default Comments;
