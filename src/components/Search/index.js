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
      flexGrow: 1,
      alignSelf: 'flex-start',
      height: 40,
      maxHeight: 40,
      fontSize: 16,
      color: colors.text,
      textAlign: 'center',
      borderBottomColor: colors.text,
      borderBottomWidth: 1,
      width: '100%',
      marginBottom: 16
    },
  });

  return (
    <TextInput
      testID={'search-box'}
      placeholder={placeholderText}
      onChangeText={searchText => setSearchText(searchText)}
      defaultValue={searchText}
      style={styles.search}
      clearTextOnFocus
      placeholderTextColor={colors.text}
      autoFocus
    />
  )
};



export default Search;
