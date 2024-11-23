import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('./FirstScreen'); 
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/mybookshelf-logo.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Meu App MyBookShelf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
