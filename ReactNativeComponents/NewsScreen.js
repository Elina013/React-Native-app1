import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const NewsScreen = ({ navigation }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Anropa nyhets-API och uppdatera state
    // Exempel med en fiktiv API-endpoint
    axios.get('https://example.com/news')
      .then(response => setNewsData(response.data))
      .catch(error => console.error('Error fetching news data:', error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', { newsItem: item })}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>Nyheter:</Text>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default NewsScreen;
