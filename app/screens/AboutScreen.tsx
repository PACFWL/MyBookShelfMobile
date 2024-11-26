import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const AboutScreen = () => {
  const router = useRouter();

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Sobre nós</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>
          Bem-vindo ao MyBookShelf! Somos apaixonados por ajudar leitores a se conectar, organizar suas listas de leitura e descobrir novos livros.
        </Text>

        <Text style={styles.sectionTitle}>Nossa Missão</Text>
        <Text style={styles.text}>
          Inspirar leitores ao redor do mundo, promovendo o hábito da leitura e conectando pessoas por meio de histórias incríveis.
        </Text>

        <Text style={styles.sectionTitle}>Nossa Visão</Text>
        <Text style={styles.text}>
          Ser a principal plataforma digital para leitores, criando uma comunidade engajada e inspiradora.
        </Text>

        <Text style={styles.sectionTitle}>Equipe</Text>
        <Text style={styles.text}>
          Nossa equipe é formada por amantes de livros, desenvolvedores e designers dedicados a criar a melhor experiência para você.
        </Text>

        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.text}>
          Tem alguma dúvida ou sugestão? Entre em contato conosco:
        </Text>
        <Text
          style={styles.link}
          onPress={() => openLink('mailto:contato@mybookshelf.com')}
        >
          contato@mybookshelf.com
        </Text>

        <Text style={styles.sectionTitle}>Siga-nos</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity onPress={() => openLink('https://facebook.com/mybookshelf')}>
            <Icon name="logo-facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://twitter.com/mybookshelf')}>
            <Icon name="logo-twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://instagram.com/mybookshelf')}>
            <Icon name="logo-instagram" size={24} color="#C13584" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Versão do App</Text>
        <Text style={styles.text}>1.0.0</Text>
      </ScrollView>
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
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  link: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  socialLinks: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
    width: '50%',
  },
});

export default AboutScreen;
