import React, { useState, useEffect } from 'react';

import { useAppState, useAppDispatch, fetchMovies } from 'app/store';
import { getUrl } from 'app/utils';

import Layout from 'app/components/Layout';
import Search from 'app/components/Search';
import List from 'app/components/List';
import ErrorModal from 'app/components/ErrorModal';
import AppButton from 'app/components/AppButton';

const HomeScreen = () => {
  const appDispatch = useAppDispatch();
  const appState = useAppState();

  const [searchText, setSearchText] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    appDispatch({ type: 'RESET' });
    setShowModal(false);
  };

  const handleSearch = () => {
    if (!searchText) return;
    fetchMovies(appDispatch, getUrl(searchText));
  };

  useEffect(() => {
    if (!appState.error) return;
    appState.error && setShowModal(true);
  }, [appState.error]);

  return (
    <Layout>
      <Search setSearchText={setSearchText} />
      <List data={appState.searchData} />
      <AppButton title={'SEARCH'} onPress={() => handleSearch()} />
      {showModal && (
        <ErrorModal modalVisible={showModal} handleModalClose={() => handleModalClose()} copy={'Whoops!'} />
      )}
    </Layout>
  );
};

export default HomeScreen;
