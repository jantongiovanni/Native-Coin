import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class CoinItem extends React.Component {
  render() {
    let date = new Date();
    let now = date.toLocaleString();

    return (
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50, marginRight: 5, marginLeft: 5}}
          source={{uri: this.props.iconUri}}
        />
        <Text style={[styles.text, { flex: 1 }]}>
          {this.props.name || 'Name'}
        </Text>
        <Text style={[styles.text, { flex: 1 }]}>
          {'Volume: ' + (this.props.volume || 0)}
        </Text>
        <Text style={[styles.text, { flex: 1 }]}>
          {'Price: ' + (this.props.price || 0)}
        </Text>
        <Text style={[styles.text, { flex: 1 }]}>
          {'#' + (this.props.rank || 'Rank')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row', // row
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around', // center, space-around
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    color: 'white'
  }
});

export default CoinItem;
