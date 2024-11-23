import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const menuOptions = [
    { id: '1', label: 'Ir para Login', action: () =>  router.push('./LoginScreen') },
    { id: '2', label: 'Sobre nós', action: () => router.push('./AboutScreen') },
  ];

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}>MyBookShelf</Text>
        <TextInput placeholder="Buscar Livros" style={styles.searchInput} />
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text>Bem-vindo ao MyBookShelf!</Text>
      </View>

      {/* Botão flutuante */}
      <TouchableOpacity style={styles.floatingButton} onPress={toggleMenu}>
        <Icon name="menu" size={28} color="#FFF" />
      </TouchableOpacity>

      {/* Menu Modal */}
      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={toggleMenu}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={toggleMenu}
          activeOpacity={1}
        >
          <View style={styles.menu}>
            <FlatList
              data={menuOptions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    toggleMenu();
                    item.action();
                  }}
                >
                  <Text style={styles.menuItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 5,
    borderRadius: 5,
    width: '70%',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#000',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  menu: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default HomeScreen;
