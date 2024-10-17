import Constants from "expo-constants";

export const MOOD_LEVELS: string[] = [
  "Sad",
  "Frustrated",
  "Grateful",
  "Happy",
  "Excited",
];

export const API_URL: string =
  Constants.expoConfig?.extra?.apiUrl || "http://localhost:3000";
