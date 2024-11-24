import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import MenuOption from './MenuOption';

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

  const circularMenuStyles = menuOptions.map((_, index) => {
    const angle = (Math.PI / 4) * (index + 1);
    const radius = 50;
    return {
      transform: [
        { translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [0, Math.cos(angle) * radius] }) },
        { translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [0, -Math.sin(angle) * radius] }) },
      ],
    };
  });

  return (
    <View>
      <TouchableOpacity style={styles.floatingButton} onPress={toggleMenu}>
        <Icon name="menu" size={28} color="#FFF" />
      </TouchableOpacity>

      {menuVisible &&
        menuOptions.map((item, index) => (
          <Animated.View key={item.id} style={circularMenuStyles[index]}>
            <MenuOption {...item} />
          </Animated.View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default FloatingMenu;
