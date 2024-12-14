
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const API_KEY = 'a72212435b774ff02e13fd85dca0cff3';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const SearchScreen = ({ navigation }) => {
  const [movieses, setMovieses] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}&page=${page}`);
      const data = await response.json();

      if (data.results.length > 0) {
        setMovieses((prevMovieses) => [...prevMovieses, ...data.results]);
        setPage((prevPage) => prevPage + 1)
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error al cargar películas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar IMDb"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          placeholderTextColor="#888"
        />
      </View>
      <FlatList
        data={movieses.filter((movie) =>
          movie.title.toLowerCase().includes(searchText.toLowerCase())
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetails', { movie: item })}
          >
            <View style={styles.movieContainer}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.moviePoster}
              />
              <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        
        onEndReached={fetchMovies}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isLoading && <Text style={styles.loadingText}>Cargando más...</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  searchIcon: { marginRight: 5 },
  searchInput: { flex: 1, fontSize: 16, color: '#333' },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  moviePoster: {
    width: 80,
    height: 120,
    borderRadius: 2,
    marginRight: 10,
  },
  movieTitle: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  }, 
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
  },
});

export default SearchScreen;

