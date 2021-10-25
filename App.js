import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {AuthProvider} from './src/contexts/auth';

const App = () => {
  return (
    <NavigationContainer>
      {/*
       * É necessário encapsular todos os componentes dentro do AuthProvider
       *  para que eles tenham acesso aos Contexts
       */}
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
