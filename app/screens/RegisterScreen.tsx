import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const RegisterScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyBookShelf</Text>
      <Text style={styles.title}>Criar Conta</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
      <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <Text style={styles.link}>
        Já possui conta?{' '}
        <Text style={styles.linkText} onPress={() => router.push('./LoginScreen')}>
          Entre
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    color: '#555',
  },
  linkText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
