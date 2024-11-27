

// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, FlatList, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// import { Card } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';


// const API_KEY = 'a72212435b774ff02e13fd85dca0cff3';
// const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

// const HomeScreen = () => {
//   const [movies, setMovies] = useState([]); // Estado para almacenar películas
//   const [loading, setLoading] = useState(true); // Estado para controlar la carga

//   // Función para obtener las películas desde la API
//   const fetchMovies = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setMovies(data.results); // Guardar las películas en el estado
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     } finally {
//       setLoading(false); // Finalizar carga
//     }
//   };

//   useEffect(() => {
//     fetchMovies(); // Llamar a la función al montar el componente
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#F6C700" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {/* Imagen destacada */}
//         <View  style={styles.featured}>
//           <Image
//             source={{ uri: 'https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg' }}
//             style={styles.featuredImage}
//           />
//           <Icon name="play-circle" size={50} color="#fff" style={styles.playIcon} />
//           <View style={styles.featuredTextContainer}>
//             <Text style={styles.featuredTitle}>Stranger Things</Text>
//             <Text style={styles.featuredSubtitle}>Tráiler Oficial</Text>
//           </View>
//         </View>

//         {/* Sección de mejores selecciones */}
//         <View style={styles.sectionTitleContainer}>
//           <Text style={styles.sectionTitle}>| Las mejores selecciones</Text>
//         </View>
//         <FlatList
//           data={movies}
//           horizontal
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <Card style={styles.movieCard}>
//               <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.moviePoster} />
//               <Card.Content>
//                 <Text style={styles.movieTitle}>{item.title}</Text>
//               </Card.Content>
//             </Card>
//           )}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   featured: { position: 'relative', height: 250, marginBottom: 10 },
//   featuredImage: { 
//     width: '100%', 
//     height: '100%'}, 
//   playIcon: { position: 'absolute', top: '45%', left: '45%' },
//   featuredTextContainer: { position: 'absolute', bottom: 10, left: 10 },
//   featuredTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
//   featuredSubtitle: { color: '#fff', fontSize: 16 },
//   sectionTitleContainer: { paddingHorizontal: 10, paddingTop: 10 },
//   sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#000000' },
//   movieCard: { width: 120, marginHorizontal: 10, borderRadius: 0, margin: 20 },
//   moviePoster: { height: 150, borderRadius: 2 },
//   movieTitle: { textAlign: 'center', marginTop: 5, fontSize: 16, color: '#333', fontWeight: 'bold' }
// });

// export default HomeScreen;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   ActivityIndicator,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Card } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const API_KEY = 'a72212435b774ff02e13fd85dca0cff3';
// const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

// const HomeScreen = () => {
//   const [moviess, setMoviess] = useState([]); // Estado para almacenar películas
//   const [loading, setLoading] = useState(true); // Estado para controlar la carga

//   // Función para obtener las películas desde la API
//   const fetchMovies = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();

//       // Guardar las películas en AsyncStorage
//       await AsyncStorage.setItem('@movies', JSON.stringify(data.results));

//       setMoviess(data.results); // Guardar las películas en el estado
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     } finally {
//       setLoading(false); // Finalizar carga
//     }
//   };

//   // Función para cargar las películas desde AsyncStorage
//   const loadMoviesFromStorage = async () => {
//     try {
//       const storedMovies = await AsyncStorage.getItem('@movies');
//       if (storedMovies) {
//         setMoviess(JSON.parse(storedMovies));
//         setLoading(false);
//       } else {
//         // Si no hay datos almacenados, hacemos la llamada a la API
//         fetchMovies();
//       }
//     } catch (error) {
//       console.error('Error loading movies from storage:', error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadMoviesFromStorage(); // Intentar cargar datos almacenados al montar el componente
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#F6C700" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {/* Imagen destacada */}
//         <View style={styles.featured}>
//           <Image
//             source={{
//               uri: 'https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
//             }}
//             style={styles.featuredImage}
//           />
//           <Icon name="play-circle" size={50} color="#fff" style={styles.playIcon} />
//           <View style={styles.featuredTextContainer}>
//             <Text style={styles.featuredTitle}>Stranger Things</Text>
//             <Text style={styles.featuredSubtitle}>Tráiler Oficial</Text>
//           </View>
//         </View>

//         {/* Sección de mejores selecciones */}
//         <View style={styles.sectionTitleContainer}>
//           <Text style={styles.sectionTitle}>| Las mejores selecciones</Text>
//         </View>
//         <FlatList
//           data={moviess}
//           horizontal
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <Card style={styles.movieCard}>
//               <Card.Cover
//                 source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
//                 style={styles.moviePoster}
//               />
//               <Card.Content>
//                 <Text style={styles.movieTitle}>{item.title}</Text>
//               </Card.Content>
//             </Card>
//           )}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   featured: { position: 'relative', height: 250, marginBottom: 10 },
//   featuredImage: {
//     width: '100%',
//     height: '100%',
//   },
//   playIcon: { position: 'absolute', top: '45%', left: '45%' },
//   featuredTextContainer: { position: 'absolute', bottom: 10, left: 10 },
//   featuredTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
//   featuredSubtitle: { color: '#fff', fontSize: 16 },
//   sectionTitleContainer: { paddingHorizontal: 10, paddingTop: 10 },
//   sectionTitle: { fontSize: 19, fontWeight: 'bold', color: 'black' },
//   movieCard: { width: 120, marginHorizontal: 10, borderRadius: 0, margin: 20,},
//   moviePoster: { height: 150, borderRadius: 2 },
//   movieTitle: {
//     textAlign: 'center',
//     marginTop: 5,
//     fontSize: 16,
//     color: '#330',
//     fontWeight: 'bold',
//   },
// });

// export default HomeScreen;

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


export const HomeScreen = () => {
  const [ movies, setMovies ] = useState([]); // Estado para almacenar películas

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
            <Card style={styles.movieCard}>
              <Card.Cover
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.moviePoster}
              />
              <Card.Content>
                <Text style={styles.movieTitle}>{item.title}</Text>
              </Card.Content>
            </Card>
          )}
        />
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
  sectionTitle: { fontSize: 19, fontWeight: 'bold', color: 'black' },
  movieCard: { width: 120, marginHorizontal: 10, borderRadius: 0, margin: 20,},
  moviePoster: { height: 150, borderRadius: 2 },
  movieTitle: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
    color: '#330',
    fontWeight: 'bold',
  },
});

export  default HomeScreen ;


