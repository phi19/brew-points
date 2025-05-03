import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native"; // Import View
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; // Import standard icons

// Define colors based on the target image
const ACTIVE_COLOR = "#C67C4E"; // Brownish active color
const INACTIVE_COLOR = "#A9A9A9"; // Gray inactive color
const TAB_BACKGROUND_COLOR = "#FFFFFF"; // White background for the tab bar
const BORDER_COLOR = "#E0E0E0"; // Light gray for the top border

export default function TabLayout() {
  // Note: Removed colorScheme usage as we are defining fixed colors based on the image

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        headerShown: false,
        tabBarShowLabel: false, // Hide text labels under icons
        tabBarStyle: {
          backgroundColor: TAB_BACKGROUND_COLOR, // Solid white background
          borderTopWidth: 1, // Add a subtle top border line
          borderTopColor: BORDER_COLOR,
          height: Platform.OS === "ios" ? 90 : 70, // Standard height adjust
          paddingBottom: Platform.OS === "ios" ? 30 : 10, // Padding for home indicator area
          paddingTop: 10,
          // Remove position: 'absolute' to prevent floating/blur
          position: "absolute", // keep this so the tab bar floats over content correctly
          bottom: 0, // ensure it's at the bottom
          left: 0,
          right: 0,
          elevation: 0, // remove shadow on android if needed
        },
        // Remove custom tabBarButton and tabBarBackground if they were causing blur/effects
        // tabBarButton: HapticTab, // Remove unless needed
        // tabBarBackground: TabBarBackground, // Remove this
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index" // Matches app/(tabs)/index.tsx (Your home screen)
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />

      {/* Likes Tab */}
      <Tabs.Screen
        name="likes" // Matches app/(tabs)/likes.tsx
        options={{
          title: "Likes",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />

      {/* Cart Tab */}
      <Tabs.Screen
        name="cart" // Matches app/(tabs)/cart.tsx
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            // Using MaterialCommunityIcons for a shopping bag icon
            <MaterialCommunityIcons
              name={focused ? "shopping" : "shopping-outline"}
              size={28}
              color={color}
            />
            // Alternative using Ionicons:
            // <Ionicons name={focused ? 'cart' : 'cart-outline'} size={28} color={color} />
          ),
        }}
      />

      {/* Notifications Tab */}
      <Tabs.Screen
        name="notifications" // Matches app/(tabs)/notifications.tsx
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
