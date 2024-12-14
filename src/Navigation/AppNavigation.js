// src/navigation/AppNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../context/AuthContext'; // Importa el hook


import HomeScreen  from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';






const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      {/* Agrega más pantallas relacionadas a Home aquí si es necesario */}
    </Stack.Navigator>
  );
}

function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BuscarPelículas" component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ title: 'Detalles de la película' }} />
    </Stack.Navigator>
  );
}

function AppNavigation() {

  const { isLoggedIn } = useAuth(); // Obtener el estado de autenticación

  if (!isLoggedIn) {
    // Mostrar solo la pantalla de login si no está autenticado
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') iconName = 'home';
          else if (route.name === 'Buscar') iconName = 'search';
          else if (route.name === 'Perfil') iconName = 'person';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        

        tabBarStyle: {
          backgroundColor: '#f6c700', // Color de fondo
          paddingBottom: 5,
          height: 60, // Ajusta la altura de la barra
          borderTopWidth: 0, // Elimina el borde superior
          borderTopEndRadius:27,
          borderTopStartRadius:27
        }
      })}
    >
      <Tab.Screen name="Inicio" component={HomeStackNavigator} />
      <Tab.Screen name="Buscar" component={SearchStackNavigator} />
      <Tab.Screen name="Perfil" component={LoginScreen} />
    </Tab.Navigator>
  );
}



export default AppNavigation;
