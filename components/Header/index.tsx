import { StyleSheet} from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Header</ThemedText>
      <Avatar.Image size={40} source={require('../../assets/images/favicon.png')} />
    </ThemedView>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: 0,
        zIndex: 1000,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})