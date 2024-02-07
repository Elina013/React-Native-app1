import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Anropa väder-API och uppdatera state
    // Exempel med en fiktiv API-endpoint
    axios.get('https://example.com/weather')
      .then(response => setWeatherData(response.data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  return (
    <View>
      <Text>Väderinformation:</Text>

      {weatherData && (
        <>
          <Image
            source={{ uri: weatherData.image }} // Uppdatera med den faktiska väderbilden
            style={{ width: 100, height: 100 }}
          />
          <Text>{weatherData.temperature}°C</Text>
          <Text>{weatherData.description}</Text>
        </>
      )}
    </View>
  );
};

export default WeatherScreen;
