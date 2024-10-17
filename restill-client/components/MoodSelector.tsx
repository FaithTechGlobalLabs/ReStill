import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";

interface MoodSelectorProps {
  moodLevels: string[];
  selectedMood: string;
  onSelectMood: (mood: string) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  moodLevels,
  selectedMood,
  onSelectMood,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ThemedView style={styles.moodSelector}>
      <ThemedView style={styles.moodLevels}>
        {moodLevels.map((moodLevel, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onSelectMood(moodLevel)}
            style={[
              styles.moodDot,
              {
                backgroundColor:
                  moodLevel === selectedMood
                    ? colors.tint
                    : colorScheme === "light"
                    ? "#E0E0E0"
                    : "#4A4A4A",
                borderColor:
                  moodLevel === selectedMood ? colors.tint : "transparent",
              },
            ]}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  moodSelector: {
    borderRadius: 15,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  moodLevels: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  moodDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
  },
});
