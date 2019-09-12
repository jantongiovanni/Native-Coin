import * as React from 'react';
import { View, Text, FlatList } from 'react-native'

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: [],
      isLoading: false,
    };
  }
  componentDidMount() { // After component mounted
    this._getDetailData("bitcoin");
  }

  _getDetailData = async (coinName) => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/${coinName}/`);
        const responseJson = await response.json();
        await this.setState({
          detailData: responseJson,
          isLoading: false,
        });

      } catch(error) {
        console.error('_getDetailData', error);
      }
  }

    render () {
      let detail = this.state.detailData.map((data) => {
        const {id, name, symbol, rank, price_usd, price_btc,
             market_cap_usd, available_supply, total_supply, max_supply,
             percent_change_1h, percent_change_7d, percent_change_24h,
             last_updated} = data;
        return (
          <View>
            <Text> {id || 'Name'} </Text>
            <Text> {name || 'Name'} </Text>
            <Text> {symbol || 'Name'} </Text>
            <Text> {rank || 'Name'} </Text>
            <Text> {price_usd || 'Name'} </Text>
            <Text> {price_btc || 'Name'} </Text>
            <Text> {market_cap_usd || 'Name'} </Text>
            <Text> {available_supply || 'Name'} </Text>
            <Text> {total_supply || 'Name'} </Text>
            <Text> {max_supply || 'Name'} </Text>
            <Text> {percent_change_1h || 'Name'} </Text>
            <Text> {percent_change_7d || 'Name'} </Text>
            <Text> {percent_change_24h || 'Name'} </Text>
            <Text> {last_updated || 'Name'} </Text>
          </View>
          );
      });

      return (
        <View>{detail}</View>
      )
    }
}

export default Detail;
