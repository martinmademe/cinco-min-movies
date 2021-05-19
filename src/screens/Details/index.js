import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useAppState } from 'app/store';

import Layout from 'app/components/Layout';

const DetailScreen = ({ route }) => {
  const { itemId } = route.params;
  const appState = useAppState();
  const [detail, setDetails] = useState(null);

  useEffect(() => {
    if (!itemId) return;

    const filterResults = appState.searchData.filter(each => each.id === itemId)[0];
    setDetails(filterResults);
  }, [itemId]);

  return (
    <Layout>
      <Text testID={'detail-view'}>
        Detail Screen
        {itemId && itemId}
        {detail && detail.overview}
      </Text>
    </Layout>
  );
}

export default DetailScreen;
