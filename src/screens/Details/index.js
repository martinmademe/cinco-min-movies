import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { useAppState } from 'app/store';
import Layout from 'app/components/Layout';

const DetailScreen = ({ route }) => {
  const { itemId } = route.params;
  const { colors } = useTheme();
  const appState = useAppState();
  const [detail, setDetails] = useState(null);

  const styles = StyleSheet.create({
    copy__heading: {
      width: '100%',
      color: colors.text,
      fontSize: 32,
      fontWeight: 'bold',
      paddingVertical: 16,

    },
    copy__body: {
      width: '100%',
      color: colors.text,
      fontSize: 16,
      paddingVertical: 8,
    },
    copy__subheading: {
      color: colors.text,
      fontWeight: 'bold',
      textAlign: 'left'
    },
  });

  useEffect(() => {
    if (!itemId) return;

    const filterResults = appState.searchData.filter(each => each.id === itemId)[0];
    setDetails(filterResults);
  }, [itemId]);

  return (
    <Layout>
      <Text testID={'detail-view'} style={styles.copy__heading}>
        {detail ? detail.title : 'Film Details'}
      </Text>
      <Text style={styles.copy__body}>
        {detail && detail.overview}
      </Text>
      <Text style={styles.copy__body}>
        <Text style={styles.copy__subheading}>
          Release date:{' '}
        </Text>
        {detail && detail.release_date}
      </Text>
      <Text style={styles.copy__body}>
        <Text style={styles.copy__subheading}>
          Average rating:{' '}
        </Text>
        {detail && detail.vote_average}
      </Text>
    </Layout>
  );
}

export default DetailScreen;
