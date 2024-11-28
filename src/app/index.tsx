import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { AppText } from '../components/text';
import { HttpService } from '../services/http-service';
import { styles } from './styles';

type Todo = Record<string, string>;

export default function App() {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const result = await new HttpService({
          baseURL: 'https://jsonplaceholder.typicode.com',
        }).get<Todo>('/todos/1');

        setTodo(result.data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {isLoading && <ActivityIndicator />}

        {todo && <AppText>{todo.title}</AppText>}
      </View>
    </SafeAreaView>
  );
}
