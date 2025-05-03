import { Tabs, router } from "expo-router";
import React from "react";
import {
  Platform,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native"; // Import View
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; // Import standard icons
import { useCart } from "@/contexts/CartContext"; // Import useCart (adjust path if needed)

// Define colors based on the target image
const ACTIVE_COLOR = "#C67C4E"; // Brownish active color
const INACTIVE_COLOR = "#A9A9A9"; // Gray inactive color
const TAB_BACKGROUND_COLOR = "#FFFFFF"; // White background for the tab bar
const BORDER_COLOR = "#E0E0E0"; // Light gray for the top border
const POPOVER_BG_COLOR = "#313131"; // Dark background for popover
const POPOVER_TEXT_COLOR = "#FFFFFF";

// --- Define Tab Bar Height (used for positioning popover) ---
const TAB_BAR_HEIGHT = Platform.OS === "ios" ? 90 : 70;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: TAB_BACKGROUND_COLOR,
          borderTopWidth: 1,
          borderTopColor: BORDER_COLOR,
          height: TAB_BAR_HEIGHT,
          paddingBottom: Platform.OS === "ios" ? 30 : 10,
          paddingTop: 10,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
        },
        // Remove custom tabBarButton and tabBarBackground if they were causing blur/effects
        // tabBarButton: HapticTab, // Remove unless needed
        // tabBarBackground: TabBarBackground, // Remove this
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home" // Matches app/(tabs)/home.tsx (Your home screen)
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

      {/* 2. Redeem Tab (NEW - Needs app/(tabs)/redeem.tsx file) */}
      <Tabs.Screen
        name="redeem" // You need to create app/(tabs)/redeem.tsx
        options={{
          title: "Redeem",
          tabBarIcon: ({ color, focused }) => (
            // Choose an icon for redeeming points (e.g., gift, ticket, star)
            <Ionicons
              name={focused ? "gift" : "gift-outline"}
              size={28}
              color={color}
            />
            // Or <Ionicons name={focused ? 'star' : 'star-outline'} size={28} color={color} />
            // Or <Ionicons name={focused ? 'ticket' : 'ticket-outline'} size={28} color={color} />
          ),
        }}
      />

      {/* 3. Community Tab (NEW - Needs app/(tabs)/community.tsx file) */}
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
