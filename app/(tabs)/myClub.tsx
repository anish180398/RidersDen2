import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
    {/* <Link href="/(tabs)/settings">Settings</Link> */}

    </ThemedView>
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
