import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from 'expo-router';

const Signup = () => {
  const navigation = useNavigation();

  const handleSignup = () => {
    // Perform signup logic here
    // After successful signup, navigate to the login screen
    navigation.navigate('login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Signup Screen</Text>
      <TextInput placeholder="Email" style={{ borderBottomWidth: 1, width: '80%', marginBottom: 20 }} />
      <TextInput placeholder="Password" style={{ borderBottomWidth: 1, width: '80%', marginBottom: 20 }} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Back to Login" onPress={() => navigation.navigate('login')} />
    </View>
  );
};

export default Signup;