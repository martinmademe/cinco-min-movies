import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// ToDo. Move this up the tree...
import { POSTER_URL } from '@env';

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});

const List = ({ data }) => {
  const navigation = useNavigation();

  const ListItem = ({ item }) => (
    <View testID={'list-item'}>
      <Text>{item.title}</Text>
      <TouchableOpacity
        testID={item.id.toString()}
        onPress={() => navigation.navigate('Details', { itemId: item.id })}
      >
        <Image
          style={styles.logo}
          source={{ uri: `${POSTER_URL}/${item.poster_path}` }}
        />
      </TouchableOpacity>
    </View >
  )

  return (
    <FlatList
      data={data}
      renderItem={ListItem}
      keyExtractor={item => item.id}
    />
  )
}

export default List;
