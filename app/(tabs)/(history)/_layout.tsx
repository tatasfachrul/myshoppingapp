import { Stack } from "expo-router";
import "react-native-reanimated";

export default function HistoryLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
