import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { MoodSelector } from "@/components/MoodSelector";
import { useMood } from "@/contexts/MoodContext";
import { MOOD_LEVELS } from "@/constants/AppConstants";

export default function MoodScreen() {
  const {
    state: { mood, moodHistory },
    handleMoodSelection,
  } = useMood();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D3CCE3", dark: "#3D3244" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-restill-logo.png")}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.header}>
          <TabBarIcon
            iconSet="Fontisto"
            name="heartbeat-alt"
            color={colors.text}
            size={44}
          />
          <ThemedView style={styles.headerText}>
            <ThemedText style={styles.title}>Mood Tracking</ThemedText>
            <ThemedText style={styles.prompt}>Hey, how you feeling?</ThemedText>
          </ThemedView>
        </ThemedView>
        <MoodSelector
          moodLevels={MOOD_LEVELS}
          selectedMood={mood}
          onSelectMood={handleMoodSelection}
        />
        <ThemedView style={styles.moodHistory}>
          <ThemedText style={[styles.label, { color: colors.text }]}>
            Your Mood History
          </ThemedText>
          {moodHistory.map((entry, index) => (
            <ThemedText key={index} style={{ color: colors.text }}>
              {new Date(entry.createdAt).toLocaleDateString()}:{" "}
              {entry.moodLevel}
            </ThemedText>
          ))}
        </ThemedView>
        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: colors.tint }]}
        >
          <ThemedText style={[styles.buttonText, { color: colors.background }]}>
            Check your mood trends
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  headerText: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  prompt: {
    fontSize: 16,
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  submitButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  moodHistory: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
