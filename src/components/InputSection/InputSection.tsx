import React from 'react';
import { TextInput, TextInputProps, TextStyle } from 'react-native';
import { styles } from './InputStyles';

type InputSectionProps = TextInputProps & {
  customHeight?: number
}

export function InputSection(props: InputSectionProps) {
  const { customHeight, style, ...otherProps } = props;

  return (
    <TextInput
      style={[styles.container, customHeight ? { height: customHeight } : {} as TextStyle]}
      {...otherProps}
    />
  );
}
