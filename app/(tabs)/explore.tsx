import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
    <Link href="/Settings">Explore</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: "center",
     gap: 8,
   }
});
