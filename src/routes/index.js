import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Posts from '../screens/Posts';
import Profile from '../screens/Profile';
import Blog from '../screens/Blog';

const AppStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Posts" component={Posts} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="Blog" component={Blog} />
    </AppStack.Navigator>
  );
};

export default Routes;
