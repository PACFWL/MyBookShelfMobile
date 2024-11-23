import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MenuOptionProps {
    label: string;
    action: () => void;
    color: string;
  }
  
  const MenuOption: React.FC<MenuOptionProps> = ({ label, action, color }) => {
    return (
      <TouchableOpacity
        onPress={action}
        style={[styles.circularButton, { backgroundColor: color }]}
      >
        <Text style={styles.circularButtonText}>{label}</Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  circularButton: {
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    margin: 1,
  },
  circularButtonText: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default MenuOption;
