import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, color = '#3498db', height , width  }:any) => {
    const progressWidth = (width/10) * progress
  return (
    <View style={[styles.container, {width,  height }]}>
      <View style={[styles.progress, { width:progressWidth , backgroundColor: color, height}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff'
  },
  progress: {
    borderRadius: 5,
  },
});

export default ProgressBar;