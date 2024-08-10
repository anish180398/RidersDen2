import { View, type ViewProps, StyleSheet, Dimensions } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedLayoutProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const topPadding = screenHeight * 0.05;
const containerWidth = screenWidth * 0.05;
export function ThemedLayout({ style, lightColor, darkColor, ...otherProps }: ThemedLayoutProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[styles.container,{ backgroundColor }, style]} {...otherProps} />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: topPadding,
    paddingHorizontal: containerWidth
  },
});