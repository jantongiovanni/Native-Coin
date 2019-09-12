import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home'
import CoinDetail from './screens/CoinDetail'

const Header = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>{props.title}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>{props.subtitle}</Text>
    </View>
  )
}

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: (
          <Header
            title={'Show Me The Coin'}
            subtitle={navigation.getParam('refreshDate', '-')}
          />
        ),
        headerStyle: {
          backgroundColor: 'pink',
        },
      }
    },
  },
  CoinDetail: {
    screen: CoinDetail,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('title', 'DETAIL'),
      }
    }
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'pink',
    }
  }
})

const AppContainer = createAppContainer(MainStack)

const App = () => {
  return (
    <AppContainer />
  )
}

export default App
