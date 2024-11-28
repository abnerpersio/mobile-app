import { forwardRef, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

type InputProps = Omit<TextInputProps, 'editable' | 'multiline'>;

type Props = InputProps & {
  disabled?: boolean;
};

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { disabled, ...restProps } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      ref={ref}
      placeholderTextColor="#aaa"
      style={[styles.input, isFocused && styles.inputFocused]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      editable={!disabled}
      {...restProps}
    />
  );
});
