import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from 'expo-router';

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform login logic here
    // After successful login, navigate to the home screen
    navigation.navigate('(tabs)/index');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <TextInput placeholder="Email" style={{ borderBottomWidth: 1, width: '80%', marginBottom: 20 }} />
      <TextInput placeholder="Password" style={{ borderBottomWidth: 1, width: '80%', marginBottom: 20 }} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate('signup')} />
      <Button title="Forgot Password" onPress={() => navigation.navigate('forgot-password')} />
    </View>
  );
};

export default Login;