import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';

import { Section } from '../components/section';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? '#000' : '#f8f8f8',
          }}
        >
          <Section>EU SOU PICA.</Section>
          <Section>SAMUEL NÃO ME CONVIDOU PRA TREINAR MAS TO FAZENDO APLICATIVOS.</Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
