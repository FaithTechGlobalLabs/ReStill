import { Stack } from "expo-router";

export default function MoodModalLayout() { 

    return (
        <Stack>
            <Stack.Screen name="moodLogModal" options={{ headerShown: false }} />
            <Stack.Screen name="thankfulModal" options={{ headerShown: false }} />
        </Stack>
    )


}