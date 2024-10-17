import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function MoodScreen() {
  const [mood, setMood] = useState<string>("Grateful");
  const moodLevels: string[] = ["", "", "Grateful", "", ""];
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
        <ThemedView style={styles.moodSelector}>
          <ThemedView style={styles.moodLevels}>
            {moodLevels.map((moodLevel, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setMood(moodLevel)}
                style={[
                  styles.moodDot,
                  {
                    backgroundColor:
                      moodLevel === mood
                        ? colors.tint
                        : colorScheme === "light"
                        ? "#E0E0E0"
                        : "#4A4A4A",
                    borderColor:
                      moodLevel === mood ? colors.tint : "transparent",
                  },
                ]}
              />
            ))}
          </ThemedView>
        </ThemedView>
        <TouchableOpacity
          style={[styles.submitlButton, { backgroundColor: colors.tint }]}
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
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  moodLevels: {
    backgroundColor: "#FFFFFF",
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
  submitlButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
