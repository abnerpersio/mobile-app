import { PropsWithChildren } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export function Section(props: PropsWithChildren) {
  const { children } = props;
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? '#fff' : '#000',
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}
