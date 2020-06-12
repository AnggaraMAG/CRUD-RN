import Blogs from './Blogs';
import Edit from './Edit';
import Post from './Post';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const NavStack = createStackNavigator(
  {
    Blogs: {
      screen: Blogs,
      navigationOptions: () => ({
        headerTitle: 'Cikarang Dry Port',
      }),
    },
    Edit: {
      screen: Edit,
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const BottomTab = createBottomTabNavigator({
  HOME: {
    screen: NavStack,
  },
  ADD: {
    screen: Post,
  },
});

export default (Routes = createAppContainer(BottomTab));
