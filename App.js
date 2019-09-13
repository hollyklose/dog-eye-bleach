import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Dog from './components/dog'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Dog />
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 15
  },
  Image: {
    width: 200,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
