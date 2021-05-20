import React from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

// ToDo. Move this up the tree...
import { POSTER_URL } from '@env';

const List = ({ data }) => {
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    logo: {
      width: 100,
      height: 100,
    },
  });


  const ListItem = ({ item }) => (
    <View testID={'list-item'} style={{
      height: windowHeight / 2,
      width: windowWidth - 32,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <TouchableOpacity
        testID={item.id.toString()}
        onPress={() => navigation.navigate('Details', { itemId: item.id })}
      >
        <Image
          style={{ width: windowWidth - 32, height: windowHeight - 124 }}
          source={{ uri: `${POSTER_URL}/${item.poster_path}` }}
        />
        <Text style={{ position: 'absolute', bottom: 0, paddingVertical: 16, width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 16, backgroundColor: colors.text, color: colors.background }}>{item.title}</Text>
      </TouchableOpacity>
    </View >
  )

  return (
    <FlatList
      data={data}
      renderItem={ListItem}
      keyExtractor={item => item.id}
      horizontal
      style={{ flex: 1 }}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default List;
