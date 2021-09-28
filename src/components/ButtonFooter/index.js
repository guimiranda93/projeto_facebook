import React from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const ButtonFooter = ({text, icon}) => {
  return (
    <Pressable style={styles.buttonFooter}>
      <Icon name={icon} size={20} style={styles.icon} />
      <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  );
};

export default ButtonFooter;
