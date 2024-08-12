import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import GlassBox from "@/components/GlassBox";
import { useThemeColor } from "@/hooks/useThemeColor";
import Speedometer from "@/components/SpeedoMeter";
import ProgressBar from "@/components/progressBar";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileCard = () => {
  const menuColor = useThemeColor({}, "icon");
  const progressConverted = 2 - 5;

  return (
    <ThemedView style={styles.container}>
      <GlassBox intensity={100}>
        <View style={styles.stacking}>
         
          <View style={styles.chartContainer}>
          <View style={styles.rankingContainer}>
          <Ionicons name={'star'} color={menuColor} size={35} />
            <ThemedText style={styles.rankingText}>Elite Rider</ThemedText>
          </View>
          {/* Rev Meter */}
          <View style={styles.revMeter}>
              <Speedometer
                progress={progressConverted}
                size={90}
                color={menuColor}
              />
              <ThemedText style={styles.revMeterText}>Rev Meter</ThemedText>
            </View>
           
          </View>
           {/* Progress Bar */}
           <View style={styles.progressBar}>
              <ThemedText>
                <ProgressBar
                  progress={2}
                  color={menuColor}
                  height={20}
                  width={200}
                />
              </ThemedText>
              <ThemedText style={styles.revMeterText}>Milestones</ThemedText>
            </View>
        </View>
      </GlassBox>
    </ThemedView>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  milestone: {
    width: 200,
  },
  revMeterText: {
    fontWeight: 700,
  },
  revMeter: {
    alignItems: "center",
  },
  progressBar: {
    flexDirection: "column",
    alignItems: "center",
  },
  chartContainer: {
    flexDirection: "row",
    gap: 40,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  rankingText: {
    fontWeight: 700,
    fontSize: 35,
    justifyContent: "center",
    lineHeight: 40,
  },
  stacking: {
    flexDirection: "column",
    gap: 40
  },
  rankingContainer: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection: 'row',
    gap: 5
  },
});
