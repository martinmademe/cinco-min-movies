import React, { useState } from 'react';
import { Button } from 'react-native';

import Layout from 'app/components/Layout'
import Search from 'app/components/Search'
import Terms from 'app/components/Terms'
import List from 'app/components/List'

import MOCK from 'app/mock.json'
// import { API_KEY, POSTER_URL } from '@env'

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState(null)

  return (
    <Layout>
      <Search setSearchText={setSearchText} />
      <Terms text={searchText} />
      <List data={MOCK.results} />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </Layout>
  );
}

export default HomeScreen;
