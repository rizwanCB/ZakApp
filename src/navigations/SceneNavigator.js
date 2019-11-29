import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';

import Splash from '../scenes/Splash';
import Home from '../scenes/Home';
import Albums from '../scenes/Albums';

// a custom check to have a small pure component for Splash only for android! ios uses its own
const FirstScreen = Platform.OS === 'android' ? Splash : Home;

const AppNavigator = createStackNavigator(
  {
    FirstScreen,
    Home,
    Albums,
  },

  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNavigator);
