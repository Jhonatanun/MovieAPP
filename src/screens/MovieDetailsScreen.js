
// import React from 'react';
// import { View, Text, StyleSheet, Image, Button, ScrollView, ToastAndroid } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const MovieDetailsScreen = ({ route }) => {
//   const { movie } = route.params;

//   const addToFavorites = async () => {
//     try {
//       const existingFavorites = await AsyncStorage.getItem('favorites');
//       const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

//       // Verificar si la película ya está en favoritos
//       const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);
//       if (isAlreadyFavorite) {
//         ToastAndroid.show('La película ya está en las mejores selecciones', ToastAndroid.SHORT);
//         return;
//       }

//       const updatedFavorites = [...favorites, movie];
//       await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//       ToastAndroid.show('¡Película agregada a las mejores selecciones!', ToastAndroid.SHORT);
//     } catch (error) {
//       console.error('Error al guardar en AsyncStorage:', error);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Imagen principal */}
//       <Image
//         source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
//         style={styles.poster}
//       />
      
//       {/* Título de la película */}
//       <Text style={styles.title}>{movie.title}</Text>

//       {/* Detalles adicionales */}
//       <View style={styles.detailsContainer}>
//         <Image
//           source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
//           style={styles.moviePoster}
//         />
//         <View style={styles.infoContainer}>
//           <Text style={styles.label}>Fecha de lanzamiento:</Text>
//           <Text style={styles.text}>{movie.release_date || 'No disponible'}</Text>

//           <Text style={styles.label}>Calificación:</Text>
//           <Text style={styles.text}>{movie.vote_average || 'No disponible'}/10</Text>

//           <Text style={styles.label}>Idioma original:</Text>
//           <Text style={styles.text}>{movie.original_language || 'No disponible'}</Text>
//         </View>
//       </View>

//       {/* Sinopsis */}
//       <Text style={styles.sectionTitle}>Sinopsis</Text>
//       <Text style={styles.overview}>{movie.overview || 'Descripción no disponible.'}</Text>

//       {/* Botón para agregar a favoritos */}
//       <Button
//         color="#f6c700"
//         title="Agregar a las mejores selecciones"
//         onPress={addToFavorites}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 16, backgroundColor: '#fff' },
//   poster: { width: '100%', height: 250, borderRadius: 8, marginBottom: 16 },
//   title: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 16, textAlign: 'center' },
//   detailsContainer: { flexDirection: 'row', marginBottom: 16 },
//   moviePoster: { width: 100, height: 150, borderRadius: 8, marginRight: 16 },
//   infoContainer: { flex: 1 },
//   label: { fontSize: 16, fontWeight: 'bold', color: '#4B4747' },
//   text: { fontSize: 14, color: '#555', marginBottom: 8 },
//   sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: '#333' },
//   overview: { fontSize: 16, color: '#555', lineHeight: 24, marginBottom: 16 },
// });

// export default MovieDetailsScreen;

// import React from 'react';
// import { View, Text, StyleSheet, Image, Button, ScrollView, ToastAndroid } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const MovieDetailsScreen = ({ route }) => {
//   const { movie } = route.params;

//   const addToFavorites = async () => {
//     if (!movie || !movie.id) {
//       ToastAndroid.show('Película inválida', ToastAndroid.SHORT);
//       return;
//     }

//     try {
//       // Cargar favoritos actuales
//       const existingFavorites = await AsyncStorage.getItem('favorites');
//       const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

//       // Verificar si ya está en favoritos
//       const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);
//       if (isAlreadyFavorite) {
//         ToastAndroid.show('La película ya está en las mejores selecciones', ToastAndroid.SHORT);
//         return;
//       }

//       // Actualizar y guardar favoritos
//       const updatedFavorites = [...favorites, movie];
//       await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));

//       // Confirmación
//       ToastAndroid.show('¡Película agregada a las mejores selecciones!', ToastAndroid.SHORT);
//     } catch (error) {
//       // Manejo de error
//       ToastAndroid.show('Error al agregar a favoritos', ToastAndroid.SHORT);
//       console.error('Error al guardar en AsyncStorage:', error);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Imagen principal */}
//       <Image
//         source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
//         style={styles.poster}
//       />

//       {/* Título de la película */}
//       <Text style={styles.title}>{movie.title}</Text>

//       {/* Detalles adicionales */}
//       <View style={styles.detailsContainer}>
//         <Image
//           source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
//           style={styles.moviePoster}
//         />
//         <View style={styles.infoContainer}>
//           <Text style={styles.label}>Fecha de lanzamiento:</Text>
//           <Text style={styles.text}>{movie.release_date || 'No disponible'}</Text>

//           <Text style={styles.label}>Calificación:</Text>
//           <Text style={styles.text}>{movie.vote_average || 'No disponible'}/10</Text>

//           <Text style={styles.label}>Idioma original:</Text>
//           <Text style={styles.text}>{movie.original_language || 'No disponible'}</Text>
//         </View>
//       </View>

//       {/* Sinopsis */}
//       <Text style={styles.sectionTitle}>Sinopsis</Text>
//       <Text style={styles.overview}>{movie.overview || 'Descripción no disponible.'}</Text>

//       {/* Botón para agregar a favoritos */}
//       <Button
//         color="#f6c700"
//         title="Agregar a las mejores selecciones"
//         onPress={addToFavorites}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 16, backgroundColor: '#fff' },
//   poster: { width: '100%', height: 250, borderRadius: 8, marginBottom: 16 },
//   title: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 16, textAlign: 'center' },
//   detailsContainer: { flexDirection: 'row', marginBottom: 16 },
//   moviePoster: { width: 100, height: 150, borderRadius: 8, marginRight: 16 },
//   infoContainer: { flex: 1 },
//   label: { fontSize: 16, fontWeight: 'bold', color: '#4B4747' },
//   text: { fontSize: 14, color: '#555', marginBottom: 8 },
//   sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: '#333' },
//   overview: { fontSize: 16, color: '#555', lineHeight: 24, marginBottom: 16 },
// });

// export default MovieDetailsScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  // Verificar si la película ya está en favoritos al cargar la pantalla
  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const existingFavorites = await AsyncStorage.getItem('favorites');
        const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
        setIsFavorite(favorites.some((fav) => fav.id === movie.id));
      } catch (error) {
        console.error('Error al verificar favoritos:', error);
      }
    };

    checkIfFavorite();
  }, [movie]);

  const toggleFavoriteStatus = async () => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

      if (isFavorite) {
        // Eliminar de favoritos
        const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsFavorite(false);
        ToastAndroid.show('Película eliminada de las mejores selecciones', ToastAndroid.SHORT);
      } else {
        // Agregar a favoritos
        const updatedFavorites = [...favorites, movie];
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsFavorite(true);
        ToastAndroid.show('¡Película agregada a las mejores selecciones!', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Error al actualizar favoritos:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagen principal */}
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
        style={styles.poster}
      />

      {/* Título de la película */}
      <Text style={styles.title}>{movie.title}</Text>

      {/* Detalles adicionales */}
      <View style={styles.detailsContainer}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
          style={styles.moviePoster}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Fecha de lanzamiento:</Text>
          <Text style={styles.text}>{movie.release_date || 'No disponible'}</Text>

          <Text style={styles.label}>Calificación:</Text>
          <Text style={styles.text}>{movie.vote_average || 'No disponible'}/10</Text>

          <Text style={styles.label}>Idioma original:</Text>
          <Text style={styles.text}>{movie.original_language || 'No disponible'}</Text>
        </View>
      </View>

      {/* Sinopsis */}
      <Text style={styles.sectionTitle}>Sinopsis</Text>
      <Text style={styles.overview}>{movie.overview || 'Descripción no disponible.'}</Text>

      {/* Botón dinámico */}
      <Button
        color="#f6c700"
        title={isFavorite ? 'Eliminar de las mejores selecciones' : 'Agregar a las mejores selecciones'}
        onPress={toggleFavoriteStatus}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  poster: { width: '100%', height: 250, borderRadius: 8, marginBottom: 16 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 16, textAlign: 'center' },
  detailsContainer: { flexDirection: 'row', marginBottom: 16 },
  moviePoster: { width: 100, height: 150, borderRadius: 8, marginRight: 16 },
  infoContainer: { flex: 1 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#4B4747' },
  text: { fontSize: 14, color: '#555', marginBottom: 8 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  overview: { fontSize: 16, color: '#555', lineHeight: 24, marginBottom: 16 },
});

export default MovieDetailsScreen;

