import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const settings = () => {
  return (
    <View style={styles.container}>
    <Link href="/Settings">Settings Page</Link>

    </View>
  )
}

export default settings

const styles = StyleSheet.create({
    container: {
     flex: 1,
      alignItems: 'center',
      justifyContent: "center",
 
    },
   
  })