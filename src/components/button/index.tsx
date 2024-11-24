import { Pressable, PressableProps, Text, View } from 'react-native';
import { styles } from './styles';

type Props = Omit<PressableProps, 'style'> & {
  onPress: () => void;
  children: React.ReactNode;
};

export function Button(props: Props) {
  const { onPress, disabled, children, ...restProps } = props;

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
        ]}
        {...restProps}
      >
        <Text style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}>{children}</Text>
      </Pressable>
    </View>
  );
}
