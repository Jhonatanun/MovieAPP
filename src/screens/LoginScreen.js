import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de instalar react-native-vector-icons

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Logo de IMDb */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>IMDb</Text>
      </View>
      
      {/* Formulario de usuario y contraseña */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#4B4747"
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#4B4747"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        
        {/* Botón de Login */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      
      {/* Opciones de redes sociales y registro */}
      <View style={styles.socialContainer}>
        <Text style={styles.orText}>O puedes ingresar con</Text>
        
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="apple" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="facebook" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="google" size={30} color="#DB4437" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿No tienes cuenta? </Text>
          <TouchableOpacity>
            <Text style={styles.registerLink}>Registrate</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity>
          <Text style={styles.guestText}>Continuar como invitado</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6C700', // Color amarillo de fondo
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logoText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 50,
    color: '#000000',
    fontWeight:'bold'
  },
  formContainer: {
    backgroundColor: '#F6C700',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontFamily: 'Roboto-LightItalic',
    fontSize: 14,
    color: '#4B4747',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#4B4747',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
  socialContainer: {
    alignItems: 'center',
  },
  orText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#4B4747',
    marginBottom: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  registerText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#4B4747',
  },
  registerLink: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#000000',
    textDecorationLine: 'underline',
  },
  guestText: {
    fontFamily: 'Roboto-LightItalic',
    fontSize: 14,
    color: '#4B4747',
  },
});

export default LoginScreen;
