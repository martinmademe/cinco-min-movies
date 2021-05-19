import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Search = ({
  searchText,
  setSearchText,
  placeholderText = 'What shall we look up?',
}) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    search: {
      color: colors.text,
      fontSize: 20,
      flexGrow: 1,
      alignItems: 'center',
    },
  });

  return (
    <TextInput
      testID={'search-box'}
      placeholder={placeholderText}
      onChangeText={searchText => setSearchText(searchText)}
      defaultValue={searchText}
      color={colors.text}
      style={styles.search}
      clearTextOnFocus
    />
  )
};



export default Search;
