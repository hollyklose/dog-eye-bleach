import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dog from './components/dog';

export default function App() {
  return (
    <View style={styles.container}>
      <Dog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 200,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
