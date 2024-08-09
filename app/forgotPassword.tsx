import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from 'expo-router';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handlePasswordReset = () => {
    // Perform password reset logic here
    // After successful password reset, navigate to the login screen
    navigation.navigate('login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Forgot Password Screen</Text>
      <TextInput placeholder="Email" style={{ borderBottomWidth: 1, width: '80%', marginBottom: 20 }} />
      <Button title="Reset Password" onPress={handlePasswordReset} />
      <Button title="Back to Login" onPress={() => navigation.navigate('login')} />
    </View>
  );
};

export default ForgotPassword;