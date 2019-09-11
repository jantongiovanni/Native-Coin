import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class CoinItem extends React.Component {
  render() {
    let date = new Date();
    let now = date.toLocaleString();

    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50, marginBottom: 6, marginHorizontal: 15}}
          source={{ uri: this.props.iconUri }}
        />
        <View style={[styles.item]}>
          <View>
            <Text style={[styles.text, { fontSize: 20}]}>{this.props.name || 'Name'}</Text>
            <Text style={[styles.text, { color: 'darkgrey' }]}>{'Volume: ' + (this.props.volumn || 0)}</Text>
            <Text style={[styles.text]}>{'$' + (this.props.price || 0)}</Text>
          </View>
          { /*<Text style={[styles.text, { fontSize: 25, marginRight: 10 }]}>{'#' + (this.props.rank || 'Rank')}</Text>*/ }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'space-around', // center, space-around
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  text: {
    color: 'black',
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

});

export default CoinItem;
