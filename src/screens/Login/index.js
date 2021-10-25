import axios from 'axios';
import React, {useContext, useState} from 'react';
import {View, TextInput, Text, Pressable, Alert} from 'react-native';
import AuthContext from '../../contexts/auth';
import styles from './styles';

const Login = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [senha, setSenha] = useState('cityslicka');
  const {signIn} = useContext(AuthContext);

  /**
   * Função de login.
   *
   * A requisição é feita e, se retornar corretamente
   * é retornado um token.
   *
   * Caso o retorno seja inválido ele vai cair no catch
   * e exibir uma mensagem de senha inválida para o
   * usuário.
   *
   * Para testar o login correto insira os seguintes dados:
   * Email válido: eve.holt@reqres.in
   * Senha válida: cityslicka
   *
   * Para simular o erro basta entrar qualquer outro dado
   *
   * A função signIn é importada do AuthContext e é
   * passado o token pra ela.
   */
  const entrar = () => {
    axios
      .post('https://reqres.in/api/login', {
        email: email,
        password: senha,
      })
      .then(res => {
        signIn(res.data.token);
      })
      .catch(() => {
        Alert.alert('Email ou Senha incorretos');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={v => setEmail(v)}
        keyboardType="email-address"
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={v => setSenha(v)}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={() => entrar()}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
};

export default Login;
