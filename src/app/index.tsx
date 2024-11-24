import React, { useRef, useState } from 'react';
import { SafeAreaView, StatusBar, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { TextArea } from '../components/text-area';

export default function App() {
  const passwordInputRef = useRef<TextInput>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar animated barStyle="light-content" />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextArea />

        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
        />

        <Input
          value={password}
          onChangeText={setPassword}
          ref={passwordInputRef}
          placeholder="Senha"
          secureTextEntry
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
        />

        <Button onPress={handleSubmit}>Login</Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
