import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path, Polygon, Circle } from "react-native-svg";

const SemiCircleSpeedometer = ({ progress, size = 200, color = "#3498db" }) => {
  const strokeWidth = 20; // Width of the outer circle
  const radius = (size - strokeWidth) / 2; // Radius of the outer circle
  const angle = progress * (180 / 10); // Angle for the progress value out of 10 (1 to 10)
  // Coordinates for the needle tip
  const needleTipX =
    size / 2 + radius * Math.cos((angle - 90) * (Math.PI / 180));
  const needleTipY =
    size / 2 + radius * Math.sin((angle - 90) * (Math.PI / 180));

  // Path for the progress arc
  const progressPath = `
    M ${size / 2 - radius} ${size / 2}
    A ${radius} ${radius} 0 ${progress > 5 ? 1 : 0} 1
    ${needleTipX}
    ${needleTipY}
  `;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size / 2}>
        {/* Background semi-circle */}
        <Path
          d={`M ${size / 2 - radius} ${size / 2} A ${radius} ${radius} 0 1 1 ${
            size / 2 + radius
          } ${size / 2}`}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress arc */}
        <Path
          d={progressPath}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Needle */}
        <Polygon
          points={`${needleTipX},${needleTipY} ${size / 2 - 5},${
            size / 2 + 10
          } ${size / 2 + 5},${size / 2 + 10}`}
          fill={color}
        />
        {/* Needle pivot */}
        <Circle cx={size / 2} cy={size / 2} r={10} fill={color} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    bottom: -20, // Adjusted to position text below the semi-circle
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SemiCircleSpeedometer;
