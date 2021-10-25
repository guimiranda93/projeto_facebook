import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Criação do contexto com valor pré-definido
 */
const AuthContext = createContext({signed: true});

/**
 * Criação do Provider para ser utilizado em toda a aplicação
 *
 * Esse children que recebe como parâmetro
 * são os componentes que vão dentro do <AuthProvider />,
 * que está declarado no App.js
 */
export const AuthProvider = ({children}) => {
  const [signed, setSigned] = useState(false);

  /**
   * Constantemente esse useEffect é chamado para
   * verificar se existe o token no AsyncStorage.
   * Caso exista ele altera o status do usuário
   * para logado.
   */
  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem('token');
      if (storagedToken) {
        setSigned(true);
      }
    }

    loadStorageData();
  }, []);

  /**
   * Função que é chamada quando o usuário
   * tenta logar.
   *
   * Ela recebe o token como parâmetro.
   *
   * Nessa função o useState signed é alterado
   * para true e o AsyncStorage recebe o
   * registro do token.
   */
  const signIn = dadosRetorno => {
    setSigned(true);
    AsyncStorage.setItem('token', dadosRetorno);
  };

  /**
   * Essa função é chamada quando o
   * usuário tenta deslogar da aplicação.
   *
   * Essa função é assíncrona, então, para
   * evitar comportamentos estranhos, é
   * necessário esperar remover os dados
   * do AsyncStorage para depois alterar
   * o useState.
   *
   * Ao alterar o useState signed essa
   * informação estará disponível na aplicação e
   * o usuário será navegado para a
   * tela de login.
   */
  const signOut = async () => {
    await AsyncStorage.clear();
    setSigned(false);
  };

  /**
   * Aqui são disponibilizados os
   * métodos para toda a aplicação.
   *
   * signed: boolean
   * signIn: function(string)
   * signOut: function()
   */
  return (
    <AuthContext.Provider
      value={{
        signed,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
