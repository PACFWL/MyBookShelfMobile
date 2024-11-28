import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const books = [
  {
    id: '1',
    title: 'Notes from Underground',
    author: 'Fyodor Dostoevsky',
    image: 'https://via.placeholder.com/100', 
    rating: 4.0,
  },
  {
    id: '2',
    title: 'More Cunning Than Man',
    author: 'Robert Hendrickson',
    image: 'https://via.placeholder.com/100',
    rating: 3.5,
  },
  {
    id: '3',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    image: 'https://via.placeholder.com/100', 
    rating: 4.5,
  },
  {
    id: '4',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    image: 'https://via.placeholder.com/100', 
    rating: 4.2,
  },
  {
    id: '5',
    title: 'Beloved',
    author: 'Toni Morrison',
    image: 'https://via.placeholder.com/100', 
    rating: 2.8,
  },
];

const BookCatalog = ({ onPressBook }: { onPressBook: (id: string) => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Livros Comentados</Text>
      <FlatList
        data={books}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressBook(item.id)} style={styles.bookContainer}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={14} color="#FFD700" />
              <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookContainer: {
    width: 120,
    marginRight: 10,
    alignItems: 'center',
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookAuthor: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    marginLeft: 5,
    color: '#555',
  },
});

export default BookCatalog;
