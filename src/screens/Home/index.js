import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { useAppState, useAppDispatch, fetchMovies } from 'app/store';
import { getUrl } from 'app/utils'

import Layout from 'app/components/Layout';
import Search from 'app/components/Search';
import Terms from 'app/components/Terms';
import List from 'app/components/List';

const HomeScreen = () => {
  const appDispatch = useAppDispatch();
  const appState = useAppState();
  const { colors } = useTheme();

  const [searchText, setSearchText] = useState(null);

  return (
    <Layout>
      <Search setSearchText={setSearchText} />
      <Terms text={searchText} />
      <List data={appState.searchData} />
      {appState.error ? <Text testID='error'>{'Whoops'}</Text> : null}
      <Button
        testID={'button'}
        title="SEARCH"
        color={colors.text}
        onPress={() => fetchMovies(appDispatch, getUrl(searchText))}
      />
    </Layout>
  );
};

export default HomeScreen;
