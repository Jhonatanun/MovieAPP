
// import React from 'react';
// import { View, Text, StyleSheet, Image, Button, ToastAndroid } from 'react-native';
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
//     <View style={styles.container}>
//       <Text style={styles.title}>{movie.title}</Text>
//       <Image
//         source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
//         style={styles.poster}
//       />
//        <View style={styles.movieContainer}>
//                <Image
//                 source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
//                 style={styles.moviePoster}
//               />
//              <Text style={styles.overview}>{movie.overview || 'Descripción no disponible.'}</Text>
             
//         </View>
//         <Button  color={'#f6c700'} title="Agregar a las mejores selecciones" onPress={addToFavorites} />
//       {/* <Text style={styles.overview}>{movie.overview}</Text>
//       <Button  color={'#f6c700'} title="Agregar a las mejores selecciones" onPress={addToFavorites} /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   poster: { width: '100%', height: 300, borderRadius: 8, marginBottom: 16 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
//   overview: { flex: 1, fontSize: 17, color: 'black', fontWeight: '600', marginLeft: 7, marginBottom: 100},
// movieContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
    
//   },
//   moviePoster: {
//     width: 100,
//     height: 140,
//     borderRadius: 2,
//     marginRight: 10,
//     marginBottom: 100,
//   },
// });

// export default MovieDetailsScreen;

import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  const addToFavorites = async () => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

      // Verificar si la película ya está en favoritos
      const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);
      if (isAlreadyFavorite) {
        ToastAndroid.show('La película ya está en las mejores selecciones', ToastAndroid.SHORT);
        return;
      }

      const updatedFavorites = [...favorites, movie];
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      ToastAndroid.show('¡Película agregada a las mejores selecciones!', ToastAndroid.SHORT);
    } catch (error) {
      console.error('Error al guardar en AsyncStorage:', error);
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

      {/* Botón para agregar a favoritos */}
      <Button
        color="#f6c700"
        title="Agregar a las mejores selecciones"
        onPress={addToFavorites}
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

