import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Posts from '../screens/Posts';
import Profile from '../screens/Profile';
import Blog from '../screens/Blog';
import PostList from '../screens/PostList';
import PostDetails from '../screens/PostDetails';
import AuthRoutes from './auth.routes';
import AuthContext from '../contexts/auth';

const AppStack = createNativeStackNavigator();

const Routes = () => {
  /**
   * Importação do contexto signed para
   * verificar se o usuário está logado ou não.
   *
   * Se ele não estiver logado é renderizada
   * a rota <AuthRoutes />.
   *
   * Caso ele esteja logado é criado um
   * novo Stack, com as outras rotas.
   */
  const {signed} = useContext(AuthContext);

  if (!signed) {
    return <AuthRoutes />;
  } else {
    return (
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Posts" component={Posts} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="Blog" component={Blog} />
        <AppStack.Screen name="PostList" component={PostList} />
        <AppStack.Screen name="PostDetails" component={PostDetails} />
      </AppStack.Navigator>
    );
  }
};

export default Routes;
