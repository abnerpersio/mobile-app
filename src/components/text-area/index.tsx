import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { forwardRef, useState } from 'react';

type InputProps = Omit<TextInputProps, 'editable' | 'multiline'>;

type Props = InputProps & {
  disabled?: boolean;
};

export const TextArea = forwardRef<TextInput, Props>((props, ref) => {
  const { disabled, ...restProps } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      ref={ref}
      placeholderTextColor="#aaa"
      style={[styles.textarea, isFocused && styles.textareaFocused]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      editable={!disabled}
      textAlignVertical="top"
      {...restProps}
      multiline
    />
  );
});