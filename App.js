import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinView from './screens/CoinView'

export default function App() {
  return (
    <CoinView></CoinView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
