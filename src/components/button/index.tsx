import { Pressable, PressableProps, StyleProp, Text, View, ViewStyle } from 'react-native';
import { styles } from './styles';

type Props = Omit<PressableProps, 'style'> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Button(props: Props) {
  const { style, disabled, children, ...restProps } = props;

  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        android_ripple={{
          color: '#444',
        }}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
          style,
        ]}
        {...restProps}
      >
        <Text style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}>{children}</Text>
      </Pressable>
    </View>
  );
}
