import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'expo-router';

const Walkthrough = () => {
  const navigation = useNavigation();

  const completeWalkthrough = () => {
    // Navigate to login screen after walkthrough
    navigation.navigate('/app/screens/login.tsx');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Walkthrough Screen</Text>
      {/* Replace with actual walkthrough content */}
      <Button title="Complete Walkthrough" onPress={completeWalkthrough} />
    </View>
  );
};

export default Walkthrough;