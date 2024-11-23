import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/header/Header';
import FloatingMenu from '../components/menu/FloatingMenu';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  const menuOptions = [
    { id: '1', label: 'Login', action: () => router.push('./LoginScreen'), color: '#FF6347' },
    { id: '2', label: 'Sobre', action: () => router.push('./AboutScreen'), color: '#4682B4' },
    { id: '3', label: 'Config', action: () => console.log('Config'), color: '#6A5ACD' },
    { id: '4', label: 'Ajuda', action: () => console.log('Ajuda'), color: '#32CD32' },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Bem-vindo ao MyBookShelf!</Text>
      </View>
      <FloatingMenu menuOptions={menuOptions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
