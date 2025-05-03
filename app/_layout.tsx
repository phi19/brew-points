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
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const LikeButton = () => {
  const [isLiked, setLiked] = useState(false);

  // Function for the header like button (placeholder)
  const handleLikePress = () => {
    setLiked((prev) => !prev);
  };

  return (
    <TouchableOpacity onPress={handleLikePress} style={{ marginRight: 15 }}>
      <Ionicons
        name={isLiked ? "heart" : "heart-outline"}
        size={26}
        color={isLiked ? "#FF0E21" : "#555"}
      />
      {/* Use 'heart' (filled) if liked state is true */}
    </TouchableOpacity>
  );
};

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
        {/* Login screen, shown only after pressing "Get Started" */}
        <Stack.Screen
          name="index"
          options={{ title: "Index", headerShown: false }}
        />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Login screen, shown only after pressing "Get Started" */}
        <Stack.Screen name="login" options={{ title: "Login" }} />

        <Stack.Screen
          name="shop/[id]" // Dynamic route matching the file structure
          options={{
            title: "Detail", // Header title
            //headerBackTitleVisible: false, // Hide text next to back arrow (iOS)
            headerTintColor: "#333", // Color for back arrow and title
            headerRight: () => (
              // Add the heart icon button
              <LikeButton />
            ),
            // Optional: Customize header style
            // headerStyle: { backgroundColor: '#fff' },
            // headerShadowVisible: false, // Hide shadow if needed
          }}
        />

        {/* Other screens like tabs or not-found */}
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* Note: StatusBar style is controlled within index.tsx for that screen */}
    </ThemeProvider>
  );
}
