import { StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import { Link, router } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';


export default function moodLogModal() {

    const [mood, setMood] = useState<string>("Grateful");
    const moodLevels: string[] = ["Sad", "Frustrated", "Grateful", "Happy", "Excited"];
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"];
  
    return (
      <ThemedView style={styles.container}>
              <StatusBar style={'dark'} />
              <TouchableOpacity style={styles.close} onPress={() => {
          router.back()
        }}>      
    <Ionicons name="close-circle-outline" size={34} color="black" />
    </TouchableOpacity>
        <ThemedView style={styles.header}>
          <ThemedView style={styles.headerText}>
            <ThemedText style={styles.prompt}>
              Hi,{"\n"}How are you today?
  
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedText style={styles.subPrompt}>
          Tap to record your mood
        </ThemedText>
        <ThemedView style={styles.moodSelector}>
          <ThemedView style={styles.moodLevels}>
            {moodLevels.map((moodLevel, index) => (
                <ThemedView key={index} style={styles.moodSlot}>
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
                          ? "#170728"
                          : "#170728",
                    borderColor:
                      moodLevel === mood ? colors.tint : "transparent",
                  },
                ]}
              />
              <ThemedText style={styles.label}>{moodLevel == mood ? moodLevel : ""}</ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
        </ThemedView>
        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={() => {
          router.navigate("/(moodModals)/thankfulModal");
        }} >
          <ThemedText style={styles.button}>Continue</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: "#D3CCE3",
    },
    logo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: "absolute",
    },
    close: {
        position: 'absolute',
        top: 60,
        left: 40,
      },
    header: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 10,
      marginTop: 100,
      backgroundColor: "#D3CCE3"
    },
    headerText: {
      flexDirection: "column",
      alignItems: "flex-start",
      marginLeft: 10,
      fontSize: 30,
      backgroundColor: "#D3CCE3"
  
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    prompt: {
      fontSize: 50,
      fontWeight: 400,
      marginBottom: 5,
      marginTop: 30,
      paddingTop: 20,
      backgroundColor: '#D3CCE3',
      color: 'black',
      lineHeight: 60,
      letterSpacing: 1
    },
    subPrompt: {
      fontSize: 20,
      marginBottom: 10,
      paddingTop: 20,
      paddingLeft: 10,
      fontWeight: 300,
      backgroundColor: '#D3CCE3',
      color: 'black',
      lineHeight: 40
    },
    moodSelector: {
      borderRadius: 15,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2.4,
      elevation: 5,
      marginBottom: 20,
      backgroundColor: "#FFFFFF",
      height: 200,
      justifyContent: "center",
      alignItems: "center",
    },
    moodSlot: {
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    label: {
      fontSize: 12,
      fontWeight: "300",
      color: "black",
    },
    moodLevels: {
      backgroundColor: "#FFFFFF",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      width: "100%",
    },
    moodDot: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderWidth: 2,
      padding: 10,
    },
    buttonContainer: {
        backgroundColor: '#9D84B7',
        borderRadius: 30,
        marginBottom: 70,
        marginHorizontal: 20, 
        alignItems: "center"
      },
      button: {
        padding: 15,
        width: 200,
        color: "black",
        borderRadius: 10,
        fontWeight: "600",
        letterSpacing: 1,
        textAlign: "center",
      }
  });