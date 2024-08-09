import { Navigator } from 'expo-router';
import {View, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';


export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>
    <Link href="/settings">Home</Link>
    </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    gap: 8,
  },
 
});
