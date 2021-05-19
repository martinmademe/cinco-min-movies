import React, { useState } from 'react';
import { Button, Text } from 'react-native';

import { useAppState, useAppDispatch, fetchMovies } from 'app/store';
import { getUrl } from 'app/utils'

import Layout from 'app/components/Layout';
import Search from 'app/components/Search';
import Terms from 'app/components/Terms';
import List from 'app/components/List';


const HomeScreen = ({ navigation }) => {
  const appDispatch = useAppDispatch();
  const appState = useAppState();

  const [searchText, setSearchText] = useState(null);

  return (
    <Layout>
      <Search setSearchText={setSearchText} />
      <Terms text={searchText} />
      {appState.error ? <Text testID='error'>{'Whoops'}</Text> : null}
      <List data={appState.searchData} />
      <Button
        title="SEARCH"
        testID={'button'}
        onPress={() => fetchMovies(appDispatch, getUrl(searchText))}
      />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </Layout>
  );
};

export default HomeScreen;
