import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './ButtonStyles';

interface ButtonProps{
    onPress: ()=>void,
    title: string
}

export function Button(props: ButtonProps) {

  return (
    <TouchableOpacity  onPress={props.onPress} style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}