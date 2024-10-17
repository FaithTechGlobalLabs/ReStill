import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function SettingsScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout pressed");
    // After logout, you might want to navigate to the login screen
    // router.replace('/login');
  };

  return (
    <ThemedView style={styles.container}>
      <Image
        source={{ uri: "https://github.com/caabernathy.png" }} // Replace with actual profile photo URL
        style={styles.profilePhoto}
      />
      <ThemedText style={styles.name}>Jane Doe</ThemedText>
      <ThemedText style={styles.email}>jane.doe@example.com</ThemedText>

      <TouchableOpacity
        style={[styles.logoutButton, { backgroundColor: colors.tint }]}
        onPress={handleLogout}
      >
        <ThemedText
          style={[styles.logoutButtonText, { color: colors.background }]}
        >
          Logout
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 30,
  },
  logoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
