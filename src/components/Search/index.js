import React from 'react';
import { TextInput } from 'react-native';

const Search = ({
  searchText,
  setSearchText,
  placeholderText = 'What shall we look up?',
}) => (
  <TextInput
    placeholder={placeholderText}
    onChangeText={searchText => setSearchText(searchText)}
    defaultValue={searchText}
    testID={'search-box'}
  />
);

export default Search;
