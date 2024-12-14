

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de instalar react-native-vector-icons
import { useAuth } from '../context/AuthContext'; // Importa el hook


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn } = useAuth(); // Usar el contexto

  // Función para manejar el login
  const handleLogin = async () => {
    setLoading(true);
    
    // Simulando un inicio de sesión (reemplazar con la lógica real de API)
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      // Aquí guardarías el token de sesión en AsyncStorage o en un Context para gestión de sesión
      ToastAndroid.show('¡Inicio de sesión exitoso!', ToastAndroid.SHORT);
      setIsLoggedIn(true); // Cambiar el estado a autenticado
    } else {
      ToastAndroid.show('Credenciales incorrectas', ToastAndroid.SHORT);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>IMDb</Text>
      
      {/* Formulario de usuario y contraseña */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Correo"
          placeholderTextColor="#4B4747"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#4B4747"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        
        {/* Botón de Login */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading} // Deshabilitar el botón mientras se procesa el login
        >
          <Text style={styles.loginButtonText}>{loading ? 'Cargando...' : 'Login'}</Text>
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
  logoText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 50,
    color: '#000000',
    fontWeight:'bold',
    textAlign: 'center',
    marginTop: 60,
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


