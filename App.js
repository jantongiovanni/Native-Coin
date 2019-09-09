import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinView from './screens/CoinView';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.statusBar} />
        <CoinView />
      </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#C2185B',
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1
  },
});
