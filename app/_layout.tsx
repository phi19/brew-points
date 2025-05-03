// Inside app/_layout.tsx
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router, useSegments } from "expo-router"; // Import useSegments
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native"; // Import UI components
import { Ionicons } from "@expo/vector-icons";
import "react-native-reanimated";
import { useState } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { CartProvider, useCart } from "@/contexts/CartContext"; //

// --- Constants for Popover Positioning ---
const ACTIVE_COLOR = "#C67C4E"; // Or import from constants
const TAB_BAR_HEIGHT = Platform.OS === "ios" ? 90 : 70;
const POPOVER_BOTTOM_PADDING = 15; // Space from screen bottom OR tab bar top
const POPOVER_BG_COLOR = "#313131";
const POPOVER_TEXT_COLOR = "#FFFFFF";

const CartPopover = () => {
  const { getItemCount, getCartTotal } = useCart();
  const segments = useSegments(); // Get current route segments

  const itemCount = getItemCount();
  const totalPrice = getCartTotal();

  // Determine if a screen within the (tabs) group is active
  const isTabsActive = segments[0] === "(tabs)";

  // Calculate dynamic bottom position
  const bottomPosition = isTabsActive
    ? TAB_BAR_HEIGHT + POPOVER_BOTTOM_PADDING // Above tab bar
    : POPOVER_BOTTOM_PADDING; // Near bottom when no tab bar

  const handlePopoverPress = () => {
    console.log("Global Cart popover pressed!");
    // TODO: Navigate to the full cart screen
    // router.push('/cart-details');
  };

  if (itemCount === 0) {
    return null; // Don't render if cart is empty
  }

  return (
    <TouchableOpacity
      style={[styles.popoverContainer, { bottom: bottomPosition }]}
      onPress={handlePopoverPress}
      activeOpacity={0.9}
    >
      <View style={styles.popoverContent}>
        <Text style={styles.popoverText}>
          {itemCount} {itemCount === 1 ? "Item" : "Items"} in Basket
        </Text>
        <Text style={styles.popoverPrice}>{totalPrice}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={POPOVER_TEXT_COLOR} />
    </TouchableOpacity>
  );
};

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

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <CartProvider>
      <ThemeProvider value={theme}>
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

        <CartPopover />
        {/* Note: StatusBar style is controlled within index.tsx for that screen */}
      </ThemeProvider>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  popoverContainer: {
    position: "absolute",
    left: 20,
    right: 20,
    // bottom is set dynamically via inline style
    backgroundColor: POPOVER_BG_COLOR,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 10, // Ensure it sits on top of other content
  },
  popoverContent: {
    // flex: 1, // Allow text to take available space if needed
  },
  popoverText: {
    color: POPOVER_TEXT_COLOR,
    fontSize: 14,
    fontWeight: "600",
  },
  popoverPrice: {
    color: POPOVER_TEXT_COLOR,
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 2,
  },
});
