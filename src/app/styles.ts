import { Platform, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flex: 1,
  },
  listContainer: {
    gap: 16,
  },
  postContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  postTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
