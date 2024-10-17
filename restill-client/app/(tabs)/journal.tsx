import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function JournalScreen() {
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
        <ThemedView style={styles.journalCard}>
          <ThemedView
            style={[
              styles.journalHeader,
              {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#2A2A2A",
              },
            ]}
          >
            <TabBarIcon
              iconSet="AntDesign"
              name="addfile"
              color={colors.text}
              size={44}
            />
            <ThemedView
              style={[
                styles.journalHeaderText,
                {
                  backgroundColor:
                    colorScheme === "light" ? "#FFFFFF" : "#2A2A2A",
                },
              ]}
            >
              <ThemedText style={styles.journalTitle}>Daily Journal</ThemedText>
              <ThemedText style={styles.journalPrompt}>
                Hey, write how you feeling
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.journalContent}>
            <Image
              source={require("@/assets/images/journal-avatar.png")}
              style={styles.avatarImage}
            />
          </ThemedView>
          <ThemedText style={styles.loremIpsum}>
            ipsum dolor sit amet consectetur. Nam at habitasse tellus tempor
            arcu et. Pretium bibendum a lacus ultrices pharetra porttitor. Velit
            nunc congue sed nunc. Sit imperdiet pellentesque non quis faucibus
            gravida ac morbi. Nisi suspendisse sed non pellentesque. Natoque
            tempus blandit viverra urna.
          </ThemedText>
        </ThemedView>
        <TouchableOpacity
          style={[styles.submitlButton, { backgroundColor: colors.tint }]}
        >
          <ThemedText style={[styles.buttonText, { color: colors.background }]}>
            New Journal Entry
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
  journalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  journalHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  journalHeaderText: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  journalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  journalPrompt: {
    fontSize: 16,
    marginBottom: 15,
  },
  journalContent: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
  },
  avatarImage: {
    width: 100,
    height: 120,
  },
  loremIpsum: {
    fontSize: 14,
    lineHeight: 20,
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
