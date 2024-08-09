import { Navigator } from 'expo-router';
import {View, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';


export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
    <Link href="/settings">Home</Link>

    </View>
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
