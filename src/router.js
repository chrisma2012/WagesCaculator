import { createStackNavigator } from 'react-navigation'
import HomeScreen from './components/home'

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  }, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex:1,
        textAlign:"center"
      },
    },
  }
)