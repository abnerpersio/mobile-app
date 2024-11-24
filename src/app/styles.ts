import { Platform, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    gap: 16,
  },
  switch: {
    marginRight: 'auto',
  },
});
