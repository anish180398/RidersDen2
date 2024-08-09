import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
    <Link href="/(tabs)/settings">Settings</Link>

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
