import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import ProfileCard from './cards/profileCard'
import { ThemedText } from '../ThemedText'

const CardSection = () => {
  return (
    <ThemedView style={styles.container} >
        <ProfileCard/>
    </ThemedView>
  )
}

export default CardSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 20
        
    },
   
})