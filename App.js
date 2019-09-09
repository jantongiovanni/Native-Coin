import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinView from './screens/CoinView';
import TopBar from './components/TopBar';
import Constants from 'expo-constants';
//use constants for deveice specific content placing under the status bar / notch
export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar title="Show Me The Coin" />
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
