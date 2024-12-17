
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';

export const HomeScreen = ( {navigation} ) => {
  const [movies, setMovies] = useState([]); // Estado para almacenar películas

  // Función para cargar las películas desde AsyncStorage
  const loadMoviesFromStorage = async () => {
    try {
      const storedMovies = await AsyncStorage.getItem('favorites');
      if (storedMovies) {
        setMovies(JSON.parse(storedMovies));
      }
    } catch (error) {
      console.error('Error loading movies from storage:', error);
    }
  };

  // Función para guardar las películas actualizadas en AsyncStorage
  const saveMoviesToStorage = async (updatedMovies) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedMovies));
    } catch (error) {
      console.error('Error saving movies to storage:', error);
    }
  };

  // Función para eliminar una película
  const handleDeleteMovie = (movieId) => {
    Alert.alert(
      'Eliminar película',
      '¿Estás seguro de que deseas eliminar esta película?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            const updatedMovies = movies.filter((movie) => movie.id !== movieId);
            setMovies(updatedMovies);
            saveMoviesToStorage(updatedMovies);
          },
        },
      ]
    );
  };

  // Función para eliminar todas las películas
  const handleDeleteAllMovies = () => {
    Alert.alert(
      'Eliminar todas las películas',
      '¿Estás seguro de que deseas eliminar todas las películas de la lista?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar todo',
          style: 'destructive',
          onPress: () => {
            setMovies([]);
            saveMoviesToStorage([]);
          },
        },
      ]
    );
  };

  // Recargar datos al enfocar la pantalla
  useFocusEffect(
    React.useCallback(() => {
      loadMoviesFromStorage();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Imagen destacada */}
        <View style={styles.featured}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
            }}
            style={styles.featuredImage}
          />
          <Icon name="play-circle" size={50} color="#fff" style={styles.playIcon} />
          <View style={styles.featuredTextContainer}>
            <Text style={styles.featuredTitle}>Stranger Things</Text>
            <Text style={styles.featuredSubtitle}>Tráiler Oficial</Text>
          </View>
        </View>

        {/* Sección de mejores selecciones */}
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>| Las mejores selecciones</Text>
        </View>
        <FlatList
          data={movies}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MovieDetails', { movie: item })}
            >
              <Card style={styles.movieCard}>
                <Card.Cover
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                  style={styles.moviePoster}
                />
                <Card.Content>
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </Card.Content>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteMovie(item.id)}
                >
                  <Icon name="trash" size={20} color="red" />
                </TouchableOpacity>
              </Card>
            </TouchableOpacity>
          )}
        />
        {/* Botón para eliminar todas las películas */}
        {movies.length > 0 && (
          <TouchableOpacity
            style={styles.deleteAllButton}
            onPress={handleDeleteAllMovies}
          >
            <Text style={styles.deleteAllButtonText}>Eliminar Mejores Selecciones</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  featured: { position: 'relative', height: 250, marginBottom: 10 },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  playIcon: { position: 'absolute', top: '45%', left: '45%' },
  featuredTextContainer: { position: 'absolute', bottom: 10, left: 10 },
  featuredTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  featuredSubtitle: { color: '#fff', fontSize: 16 },
  sectionTitleContainer: { paddingHorizontal: 10, paddingTop: 10 },
  sectionTitle: { fontSize: 23, fontWeight: 'bold', color: 'black' },
  movieCard: {
    width: 160,
    marginHorizontal: 9,
    marginTop: 30,
    borderRadius: 0,
    margin: 20,
    position: 'relative', 
  },
  moviePoster: { height: 250, borderRadius: 2 },
  movieTitle: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
    color: '#330',
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 15,
    padding: 5,
  },
  deleteAllButton: {
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: '#ff4d4d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  deleteAllButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;



