import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Tid: [Implementera tid här]</Text>
      <Text>Datum: [Implementera datum här]</Text>
      <Text>Veckonummer: [Implementera veckonummer här]</Text>

      <Button
        title="Väder"
        onPress={() => navigation.navigate('Weather')}
      />

      <Button
        title="Nyheter"
        onPress={() => navigation.navigate('News')}
      />
    </View>
  );
};

export default HomeScreen;
