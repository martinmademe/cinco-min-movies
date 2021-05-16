import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

// ToDo. Move this up the tree...
import { POSTER_URL } from '@env'

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});

const ListItem = ({ item }) => (
  <View>
    <Text>{item.title}</Text>
    <Image
      style={styles.logo}
      source={{ uri: `${POSTER_URL}/${item.poster_path}` }}
    />
  </View>
);

const List = ({ data }) => (
  <FlatList
    data={data}
    renderItem={ListItem}
    keyExtractor={item => item.id}
  />
)

export default List;
