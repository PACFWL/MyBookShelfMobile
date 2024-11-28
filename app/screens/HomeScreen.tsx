import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../components/header/Header';
import FloatingMenu from '../components/menu/FloatingMenu';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [isSearchVisible, setSearchVisible] = useState(false); 
  const [searchText, setSearchText] = useState(''); 
  const router = useRouter();

  const menuOptions = [
    { id: '1', label: 'Login', action: () => router.push('./LoginScreen'), color: '#FF6347' },
    { id: '2', label: 'Sobre', action: () => router.push('./AboutScreen'), color: '#4682B4' },
    { id: '3', label: 'Profile', action: () => router.push('./ProfileScreen'), color: '#4682B4' },
    { id: '4', label: 'Book', action: () => router.push('./BookScreen'), color: '#4682B4' },
  ];

  
  const handleOutsideClick = () => {
    if (isSearchVisible) {
      setSearchVisible(false);
      Keyboard.dismiss(); 
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View style={styles.container}>
        <Header />
        <View style={styles.searchContainer}>
          {!isSearchVisible ? (
            <TouchableOpacity
              style={styles.searchIconContainer}
              onPress={() => setSearchVisible(true)}
            >
              <Ionicons name="search" size={24} color="#000" />
            </TouchableOpacity>
          ) : (
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar Livros"
              value={searchText}
              onChangeText={setSearchText}
              autoFocus
            />
          )}
        </View>
        <View style={styles.content}>
          <Text>Bem-vindo ao MyBookShelf!</Text>
        </View>
        <FloatingMenu menuOptions={menuOptions} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  searchContainer: {
    position: 'absolute',
    top: 50, 
    right: 10, 
  },
  searchIconContainer: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, 
  },
  searchInput: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2, 
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
