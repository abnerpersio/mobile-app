import React from 'react';
import { Modal as NativeModal, Platform, StatusBar, View } from 'react-native';
import { styles } from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal(props: Props) {
  const { visible, onClose, children } = props;

  return (
    <NativeModal
      visible={visible}
      transparent
      statusBarTranslucent
      onRequestClose={onClose}
      presentationStyle={Platform.OS === 'ios' ? 'pageSheet' : 'overFullScreen'}
      animationType={Platform.OS === 'ios' ? 'slide' : 'fade'}
    >
      <StatusBar barStyle="light-content" animated />

      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </NativeModal>
  );
}
