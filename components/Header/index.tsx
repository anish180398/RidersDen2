import { StyleSheet} from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'

const Header = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Header</ThemedText>
    </ThemedView>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: 0,
        zIndex: 1000
    }
})