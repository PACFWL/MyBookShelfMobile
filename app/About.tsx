import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'; // Biblioteca de ícones
import { useRouter } from 'expo-router'; // Navegação com expo-router

const About = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Cabeçalho com botão de retorno */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Sobre nós</Text>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.text}>
          Bem-vindo ao MyBookShelf! Somos apaixonados por ajudar leitores a se conectar, organizar suas listas de leitura, e descobrir novos livros.
        </Text>
        <Text style={styles.text}>
          Obrigado por fazer parte do MyBookShelf. Vamos embarcar nessa jornada juntos!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    color: '#555',
  },
});

export default About;
