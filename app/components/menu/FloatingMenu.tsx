import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet, Text } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

interface MenuOption {
  id: string;
  label: string;
  action: () => void;
  color: string;
}

interface FloatingMenuProps {
  menuOptions: MenuOption[];
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ menuOptions }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0)); 

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButton} onPress={toggleMenu}>
        <Icon name={menuVisible ? 'close' : 'menu'} size={28} color="#FFF" />
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.menuContainer,
          {
            opacity: animation,
            transform: [{ scaleY: animation }],
          },
        ]}
      >
        {menuOptions.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.menuOption, { backgroundColor: item.color }]}
            onPress={() => {
              item.action();
              toggleMenu(); 
            }}
          >
            <Text style={styles.optionText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  floatingButton: {
    backgroundColor: '#000',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 80,
    right: 0,
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    transform: [{ scaleY: 0 }],
  },
  menuOption: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  optionText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default FloatingMenu;
