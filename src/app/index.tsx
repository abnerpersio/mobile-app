import React, { useState } from 'react';
import { FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';

const posts = Array.from({ length: 35 }, (_, index) => ({
  id: Math.random(),
  title: `Post #${index + 1}`,
}));

export default function App() {
  const [refreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={{ gap: 8 }}
        refreshControl={
          <RefreshControl
            onRefresh={handleRefresh}
            refreshing={refreshing}
            // iOS
            tintColor="purple"
            title="Carregando..."
            titleColor="purple"
            // Android
            colors={['purple']}
            progressBackgroundColor="#f98"
          />
        }
        numColumns={3}
        data={posts}
        keyExtractor={(post) => String(post.id)}
        renderItem={({ item: post }) => (
          <View key={post.id} style={styles.postContainer}>
            <Text style={styles.postTitle}>{post.title}</Text>
          </View>
        )}
        getItemLayout={(_, index) => ({
          index,
          length: 64 + 16,
          offset: (64 + 16) * index,
        })}
      />
    </SafeAreaView>
  );
}
