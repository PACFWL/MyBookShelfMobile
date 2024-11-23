import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const menuOptions = [
    { id: '1', label: 'Login', action: () => router.push('./LoginScreen'), color: '#FF6347' },
    { id: '2', label: 'Sobre', action: () => router.push('./AboutScreen'), color: '#4682B4' },
    { id: '3', label: 'Config', action: () => console.log('Config'), color: '#6A5ACD' }, // Exemplo de outro botão
    { id: '4', label: 'Ajuda', action: () => console.log('Ajuda'), color: '#32CD32' },   // Exemplo de outro botão
  ];

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const interpolatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.6], // Opacidade do botão flutuante
  });

  const circularMenuStyles = menuOptions.map((_, index, array) => {
    const angle = (Math.PI / 4) * (index + 1); 
    const radius = 100; 
    const x = Math.cos(angle) * radius * 1.4; 
    const y = Math.sin(angle) * radius;

    const scale = array.length > 6 ? 0.7 : 1;

    return {
      transform: [
        {
          translateX: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, x],
          }),
        },
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -y], 
          }),
        },
        { scale: animation.interpolate({ inputRange: [0, 1], outputRange: [0, scale] }) },
      ],
    };
  });

  return (
    <View style={styles.container}>
   
      <View style={styles.header}>
        <Text style={styles.logo}>MyBookShelf</Text>
        <TextInput placeholder="Buscar Livros" style={styles.searchInput} />
      </View>

    
      <View style={styles.content}>
        <Text>Bem-vindo ao MyBookShelf!</Text>
      </View>

      
      <TouchableOpacity
        style={[styles.floatingButton, { opacity: interpolatedOpacity }]}
        onPress={toggleMenu}
      >
        <Icon name="menu" size={28} color="#FFF" />
      </TouchableOpacity>

    
      {menuVisible &&
        menuOptions.map((item, index) => (
          <Animated.View
            key={item.id}
            style={[
              styles.circularButton,
              circularMenuStyles[index],
              { backgroundColor: item.color },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                toggleMenu();
                item.action();
              }}
            >
              <Text style={styles.circularButtonText}>{item.label}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
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
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  circularButton: {
    position: 'absolute',
    bottom: 40, 
    right: 40,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  circularButtonText: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default HomeScreen;
