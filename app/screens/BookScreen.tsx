import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const BookScreen = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes do Livro</Text>
      </View>

     
      <ScrollView contentContainerStyle={styles.content}>
      
        <View style={styles.mainInfo}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} 
            style={styles.bookImage}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.bookTitle}>Notes from Underground (Bantam Classic)</Text>
            <Text style={styles.bookAuthor}>Fyodor Dostoevsky</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>3.5</Text>
              <Text style={styles.reviewsText}>(1 Avaliação)</Text>
            </View>
          </View>
        </View>

  
        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.text}>
          O romance mais revolucionário de Dostoevsky, *Notas do Subterrâneo*, marca a linha divisória entre a ficção
          dos séculos XIX e XX e entra nas vozes da subjetividade moderna...
        </Text>

       
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Quero Ler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Avaliar</Text>
          </TouchableOpacity>
        </View>

  
        <Text style={styles.sectionTitle}>Sobre a Edição</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>Formato: Paperback</Text>
          <Text style={styles.text}>Publicação: 1983</Text>
          <Text style={styles.text}>Editora: Bantam</Text>
          <Text style={styles.text}>ISBN: 1234567890</Text>
        </View>

       
        <Text style={styles.sectionTitle}>Sobre o Autor</Text>
        <View style={styles.authorContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }} 
            style={styles.authorImage}
          />
          <View>
            <Text style={styles.authorName}>Fyodor Dostoevsky</Text>
            <Text style={styles.text}>
              O romancista russo Fyodor Dostoevsky foi um jornalista e ensaísta, cuja penetração psicológica na alma
              humana influenciou profundamente...
            </Text>
          </View>
        </View>

       
        <Text style={styles.sectionTitle}>Resenhas e Avaliações</Text>
        <View style={styles.reviewsContainer}>
          <Icon name="person-circle" size={50} color="#CCC" />
          <Text style={styles.text}>O que você acha?</Text>
          <TouchableOpacity style={styles.reviewButton}>
            <Text style={styles.reviewButtonText}>Fazer Review</Text>
          </TouchableOpacity>
        </View>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  mainInfo: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 10,
  },
  reviewsText: {
    fontSize: 14,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  authorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewsContainer: {
    alignItems: 'center',
  },
  reviewButton: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  reviewButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default BookScreen;
