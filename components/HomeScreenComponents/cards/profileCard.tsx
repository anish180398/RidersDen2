import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import GlassBox from '@/components/GlassBox'
import { ProgressBar } from 'react-native-paper';
import { useThemeColor } from '@/hooks/useThemeColor';
import Speedometer from '@/components/SpeedoMeter'


const ProfileCard = () => {
    const menuColor = useThemeColor({}, 'icon')
    const progressConverted = 1 - 5

  return (
<ThemedView style={styles.container} >
<GlassBox intensity={100}>
<Speedometer progress={progressConverted} size={100} color={menuColor}/>
      </GlassBox>
        </ThemedView>  )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    milestone: {
 width: 200,
    }
})