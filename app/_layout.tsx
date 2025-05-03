// Inside app/_layout.tsx
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    // Add other fonts here if needed
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* This defines the coffee screen (index.tsx) as the initial screen */}
        {/* and hides its header */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Login screen, shown only after pressing "Get Started" */}
        <Stack.Screen name="login" options={{ title: "Login" }} />

        {/* Other screens like tabs or not-found */}
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* Note: StatusBar style is controlled within index.tsx for that screen */}
    </ThemeProvider>
  );
}
