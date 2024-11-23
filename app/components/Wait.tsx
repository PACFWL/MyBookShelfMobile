import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function Wait({ message }: { message?: string }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007BFF" />
      <Text style={styles.message}>{message || 'Carregando...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  message: {
    marginTop: 15,
    fontSize: 16,
    color: '#555',
  },
});
