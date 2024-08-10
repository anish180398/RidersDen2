import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Avatar } from "react-native-paper";
import { IconButton, MD3Colors } from "react-native-paper";
import { useThemeColor } from '@/hooks/useThemeColor';

const Header = () => {
    const menuColor = useThemeColor({}, 'icon')
  return (
    <ThemedView style={styles.container}>
        <IconButton
          icon="menu"
          iconColor={menuColor}
          size={35}
          onPress={() => console.log("Pressed")}
        />
      <ThemedText style={styles.headerText}>Welcome, Anish</ThemedText>
      <Avatar.Image
        size={40}
        source={require("../../assets/images/favicon.png")}
      />
    </ThemedView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 8,
    zIndex: 1000,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600
  }
});
