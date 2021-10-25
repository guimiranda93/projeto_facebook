import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';

const PostDetails = ({route}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>{route.params.post.title}</Text>
        <Text style={styles.author}>{route.params.post.author}</Text>
        <Text style={styles.text}>{route.params.post.content}</Text>
        <View style={styles.border} />
      </View>
    </ScrollView>
  );
};

export default PostDetails;
