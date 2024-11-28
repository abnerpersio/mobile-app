import { Text, TextProps } from 'react-native';
import { styles } from './styles';

type Props = TextProps & {
  children: React.ReactNode;
};

export function AppText(props: Props) {
  const { children, style, ...restProps } = props;

  return (
    <Text style={[styles.defaultText, style]} {...restProps}>
      {children}
    </Text>
  );
}
