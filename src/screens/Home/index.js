import React, { useState, useContext } from 'react';
import { Button } from 'react-native';

import { AppContext } from 'app/store';

import Layout from 'app/components/Layout'
import Search from 'app/components/Search'
import Terms from 'app/components/Terms'
import List from 'app/components/List'

import { API_KEY, API_URL } from '@env'

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState(null)
  const { state: { searchData }, dispatch } = useContext(AppContext);

  const fetchMovies = async (params) => {

    const url = `${API_URL}api_key=${API_KEY}&language=en-US&query=${params}&page=1&include_adult=false`

    try {
      dispatch({ type: 'SET_LOADING_STATE', payload: true });
      let response = await fetch(url);
      let data = await response.json();
      return dispatch({ type: 'SET_SEARCH_DATA', payload: data.results });
    } catch (error) {
      console.error(error);
      return dispatch({ type: 'SET_ERROR', payload: error });
    }
  };

  return (
    <Layout>
      <Search setSearchText={setSearchText} />
      <Terms text={searchText} />
      <List data={searchData} />
      <Button title='SEARCH' onPress={() => fetchMovies(searchText)} />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </Layout>
  );
}

export default HomeScreen;
