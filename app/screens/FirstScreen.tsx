import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const FirstScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyBookShelf</Text>
      <Text style={styles.subtitle}>
        Organize suas leituras, conecte-se com outros apaixonados por livros e explore um mundo de conhecimento!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('./HomeScreen')}>
        <Text style={styles.buttonText}>Conecte-se!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  altButton: {
    marginTop: 15, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF', 
  },
  altButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default FirstScreen;
