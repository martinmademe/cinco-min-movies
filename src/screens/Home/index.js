import React, { useState } from 'react';
import { Button } from 'react-native';

import Layout from 'app/components/Layout'
import Search from 'app/components/Search'
import Terms from 'app/components/Terms'
import List from 'app/components/List'

import MOCK from 'app/mock.json'
import { API_KEY, API_URL, POSTER_URL } from '@env'

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState(null)
  const [movieData, setMovieData] = useState(MOCK)

  const fetchMovies = async (params) => {

    const url = `${API_URL}api_key=${API_KEY}&language=en-US&query=${params}&page=1&include_adult=false`

    try {
      let response = await fetch(url);
      let data = await response.json();
      return setMovieData(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Search setSearchText={setSearchText} />
      <Terms text={searchText} />
      <List data={movieData} />
      <Button title='SEARCH' onPress={() => fetchMovies(searchText)} />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </Layout>
  );
}

export default HomeScreen;
