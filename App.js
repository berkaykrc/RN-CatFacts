import axios from 'axios';
import {
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  View,
} from 'react-native';
import React, { useEffect, useState} from 'react';
import { CatFactCard } from './src/components';
import { main_styles } from './src/styles/pages_styles'

const baseUrl = 'https://cat-fact.herokuapp.com/facts/random'

function App() {
  const [loading, handleLoading] = useState(false);
  const [catFactList, handleCatFactList] = useState(null)

  useEffect(() => {
    axios.get(baseUrl, {
      params:{
        animal_type: 'cat',
      }
    }).then((response) => {
      console.log(response)
      handleCatFactList(response.data);
      handleLoading(false);
    })
  }, []);

  if (!catFactList) {
    return (
      <View style={main_styles.center}>
        <ActivityIndicator />
        <Text>Loading facts...</Text>
      </View>
    );
  }

  return (
    <View style={main_styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => fetchData()} />
        }>
        <CatFactCard data={catFactList} />
      </ScrollView>
    </View>
  );
}

export default App;
