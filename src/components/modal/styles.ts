import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 24,
    minWidth: 200,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
