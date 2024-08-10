import { Navigator } from 'expo-router';
import {SafeAreaView, View, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import Header from '@/components/Header';
import { ThemedLayout } from '@/components/ThemedLayout';


export default function HomeScreen() {
  return (
    <ThemedLayout>
      <Header/>
      <ThemedText>
    <Link href="/settings">Home</Link>
    </ThemedText>
    </ThemedLayout>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
 
});
