import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { AppContext } from 'app/store';

import Layout from 'app/components/Layout'

const DetailScreen = ({ route }) => {
  const { itemId } = route.params;
  const { state: { searchData } } = useContext(AppContext);

  const result = searchData.filter(each => each.id === itemId)[0]

  return (
    <Layout>
      <Text style={[styles.copy, { color: textColorStyle }]}>
        Detail Screen
        {itemId}
        {result.overview}
      </Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  copy: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  }
});

export default DetailScreen;
