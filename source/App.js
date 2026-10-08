import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>QuoteCraft React Native</Text>
      <Text style={styles.message}>Hello World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#f5f1e8' },
  title: { fontSize: 22, fontWeight: '600', color: '#176b61', marginBottom: 20, textAlign: 'center' },
  message: { fontSize: 28, color: '#222' },
});
