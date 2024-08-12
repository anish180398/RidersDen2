import React from 'react';
import { StyleSheet, View, Text, Dimensions} from 'react-native';
import { BlurView } from 'expo-blur';
const GlassBox = ({ intensity, children }:any) => {
  return (
    <View style={styles.container}>
      <BlurView style={styles.absolute} tint="prominent" intensity={intensity}>
        <View style={styles.content}>
          {children}
        </View>
      </BlurView>
    </View>
  );
};
const {width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 30,  
    height: screenHeight * 0.24,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(94, 94, 94, 0.3)',
    shadowColor: '#fff',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.,
    shadowRadius: 70,
  },
  absolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default GlassBox;