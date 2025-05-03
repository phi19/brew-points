// Inside app/(tabs)/redeem.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground, // For header background
  FlatList,
  ActivityIndicator,
  Alert,
  Platform,
  SafeAreaView,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import * as SecureStore from "expo-secure-store";
import { Stack } from "expo-router"; // Import Stack for header config, router for back
import { StatusBar } from "expo-status-bar";

// --- Constants & Types ---
const USER_DATA_KEY = "userData";
const ACTIVE_COLOR = "#C67C4E"; // Re-use active color

interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  loyaltyPoints?: number; // Make optional for robustness
  pointsExpiryDate?: string; // Make optional
  location?: { city: string | null; country: string | null };
}

interface Voucher {
  id: string;
  title: string; // e.g., "10% discount voucher"
  description: string; // e.g., "10% discount voucher" (can be same as title)
  pointsRequired: number;
  gradientColors: string[]; // Array of colors for the background gradient
}

// --- Dummy Data (Replace with API call later) ---
const dummyVouchers: Voucher[] = [
  {
    id: "v1",
    title: "10% discount voucher",
    description: "10% discount voucher",
    pointsRequired: 1000,
    gradientColors: ["#D946EF", "#A21CAF"],
  }, // Magenta/Pink
  {
    id: "v2",
    title: "25% discount voucher",
    description: "25% discount voucher",
    pointsRequired: 2500,
    gradientColors: ["#3B82F6", "#2563EB"],
  }, // Blue
  {
    id: "v3",
    title: "20% discount voucher",
    description: "20% discount voucher",
    pointsRequired: 2000,
    gradientColors: ["#F97316", "#EA580C"],
  }, // Orange
  {
    id: "v4",
    title: "15% discount voucher",
    description: "15% discount voucher",
    pointsRequired: 1500,
    gradientColors: ["#8B5CF6", "#7C3AED"],
  }, // Purple
];

// --- Components ---

// Voucher Card Component
const VoucherCard = ({
  item,
  onRedeem,
  userPoints,
}: {
  item: Voucher;
  onRedeem: (voucher: Voucher) => void;
  userPoints: number;
}) => {
  const canRedeem = userPoints >= item.pointsRequired;

  return (
    <View style={styles.voucherCard}>
      <LinearGradient
        colors={item.gradientColors}
        style={styles.voucherGradient}
      >
        {/* Optional: Add wave pattern ImageBackground here if you have the asset */}
        <Text style={styles.voucherTitleLarge}>{item.title}</Text>
      </LinearGradient>
      <View style={styles.voucherInfo}>
        <Text style={styles.voucherTitleSmall}>{item.description}</Text>
        <Text style={styles.voucherPoints}>
          {item.pointsRequired.toLocaleString("de-DE")} Points{" "}
          {/* Format points */}
        </Text>
        <TouchableOpacity
          style={[
            styles.redeemButton,
            !canRedeem && styles.redeemButtonDisabled,
          ]}
          onPress={() => onRedeem(item)}
          disabled={!canRedeem}
        >
          <Text
            style={[
              styles.redeemButtonText,
              !canRedeem && styles.redeemButtonTextDisabled,
            ]}
          >
            Redeem
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// --- Main Screen Component ---
export default function RedeemScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [vouchers, setVouchers] = useState<Voucher[]>(dummyVouchers); // Use dummy data for now
  const [searchQuery, setSearchQuery] = useState("");

  const userPoints = user?.loyaltyPoints ?? 0; // Default to 0 if user or points are null

  useEffect(() => {
    const loadUserData = async () => {
      setIsLoadingUser(true);
      try {
        const userDataString = await SecureStore.getItemAsync(USER_DATA_KEY);
        if (userDataString) {
          setUser(JSON.parse(userDataString));
        } else {
          console.warn("User data not found in secure store.");
          // Maybe navigate to login if no user? router.replace('/login');
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      } finally {
        setIsLoadingUser(false);
      }
    };
    loadUserData();
    // TODO: Fetch vouchers from backend here later
  }, []);

  const handleRedeem = (voucher: Voucher) => {
    if (userPoints >= voucher.pointsRequired) {
      Alert.alert(
        "Confirm Redemption",
        `Redeem "${voucher.title}" for ${voucher.pointsRequired.toLocaleString(
          "de-DE"
        )} points?`,
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Redeem",
            onPress: () => {
              console.log("Redeeming voucher:", voucher.id);
              // TODO: Implement actual redemption logic (API call, update points)
              Alert.alert("Success", "Voucher redeemed! (Simulation)");
              // --- Simulate points deduction (for UI update) ---
              if (user) {
                const updatedPoints = user.loyaltyPoints
                  ? user.loyaltyPoints - voucher.pointsRequired
                  : 0;
                const updatedUser = { ...user, loyaltyPoints: updatedPoints };
                setUser(updatedUser);
                // Optionally update SecureStore too (important if points are not refetched often)
                SecureStore.setItemAsync(
                  USER_DATA_KEY,
                  JSON.stringify(updatedUser)
                );
              }
              // ----------------------------------------------
            },
          },
        ]
      );
    } else {
      Alert.alert(
        "Insufficient Points",
        "You do not have enough points to redeem this voucher."
      );
    }
  };

  // Basic filtering (can be expanded)
  const filteredVouchers = vouchers.filter(
    (v) =>
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      {/* Configure header dynamically */}
      <Stack.Screen
        options={{
          headerShown: true, // Show the header provided by Stack Navigator
          title: "Loyalty Program",
          headerStyle: { backgroundColor: "#212121" }, // Dark background for header
          headerTintColor: "#FFFFFF", // White color for title and back arrow
          headerTitleAlign: "center",
          headerShadowVisible: false, // Hide the shadow/border
        }}
      />

      <ScrollView
        style={styles.scrollView}
        stickyHeaderIndices={[]} // No sticky header needed within ScrollView now
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* --- Header Content Area (Below Navigator Header) --- */}
        <ImageBackground
          // source={require('../../assets/images/header_background.png')} // Optional background image/pattern
          style={styles.headerContent}
          // imageStyle={{ opacity: 0.1 }} // Example style for background image
          // Or use a solid color:
          backgroundColor={"#212121"} // Match headerStyle background
        >
          <View style={styles.pointsContainer}>
            <View style={styles.pointsIconBg}>
              <FontAwesome5 name="coins" size={18} color={"#DAA520"} />{" "}
              {/* Gold coin icon */}
            </View>
            {isLoadingUser ? (
              <ActivityIndicator color="#FFFFFF" style={{ marginLeft: 10 }} />
            ) : (
              <Text style={styles.pointsText}>
                {userPoints.toLocaleString("de-DE")}{" "}
                <Text style={styles.pointsLabel}>Points</Text>
              </Text>
            )}
          </View>
          <View style={styles.pointsSubRow}>
            <Text style={styles.expiryText}>
              {user?.pointsExpiryDate
                ? `Expiring on ${user.pointsExpiryDate}`
                : ""}
            </Text>
            <TouchableOpacity
              onPress={() => console.log("Point Details Pressed")}
            >
              <Text style={styles.detailsLink}>Point Details</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* --- Donate Banner --- */}
        <TouchableOpacity
          style={styles.donateBanner}
          onPress={() => console.log("Donate Pressed")}
        >
          <MaterialCommunityIcons name="gift-outline" size={24} color="#333" />
          <Text style={styles.donateText}>
            Donate your points to those in need.
          </Text>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>

        {/* --- Search Area --- */}
        <View style={styles.searchFilterContainer}>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#999"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="What do you want today?"
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => console.log("Filter Pressed")}
          >
            <Ionicons name="options-outline" size={24} color="#555" />
          </TouchableOpacity>
        </View>

        {/* --- Opportunities Section --- */}
        <View style={styles.opportunitiesContainer}>
          <View style={styles.discoverRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.discoverText}>
              Discover these great opportunities!
            </Text>
            <View style={styles.dividerLine} />
          </View>

          <FlatList
            data={filteredVouchers}
            renderItem={({ item }) => (
              <VoucherCard
                item={item}
                onRedeem={handleRedeem}
                userPoints={userPoints}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false} // Scroll handled by outer ScrollView
            columnWrapperStyle={styles.voucherListColumnWrapper}
            contentContainerStyle={styles.voucherListContentContainer}
            ListEmptyComponent={
              <Text
                style={{ textAlign: "center", marginTop: 20, color: "#666" }}
              >
                No vouchers found.
              </Text>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F4F4", // Light background for main content area
  },
  scrollView: {
    flex: 1,
  },
  headerContent: {
    // backgroundColor: '#212121', // Dark background color
    paddingHorizontal: 20,
    paddingTop: 10, // Space below navigator header
    paddingBottom: 25,
    // borderBottomLeftRadius: 20, // Can add rounding if desired
    // borderBottomRightRadius: 20,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  pointsIconBg: {
    backgroundColor: "rgba(255, 255, 255, 0.15)", // Semi-transparent white circle
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  pointsText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  pointsLabel: {
    fontSize: 24,
    fontWeight: "normal",
  },
  pointsSubRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 42, // Align with points text start
  },
  expiryText: {
    fontSize: 13,
    color: "#BDBDBD",
  },
  detailsLink: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  donateBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: -15, // Overlap header slightly
    marginBottom: 15,
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  donateText: {
    flex: 1, // Take available space
    marginLeft: 12,
    marginRight: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  searchFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25, // More rounded
    paddingHorizontal: 15,
    height: 45,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#333",
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 10,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  opportunitiesContainer: {
    paddingHorizontal: 15,
  },
  discoverRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  discoverText: {
    fontSize: 13,
    color: "#888",
    marginHorizontal: 10,
    fontWeight: "500",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  voucherListColumnWrapper: {
    justifyContent: "space-between",
  },
  voucherListContentContainer: {
    paddingBottom: 100, // Space for tab bar + popover
  },
  voucherCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 15,
    overflow: "hidden", // Clip gradient corners
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  voucherGradient: {
    height: 80, // Adjust height
    padding: 12,
    justifyContent: "center", // Center text vertically
  },
  voucherTitleLarge: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    lineHeight: 20,
  },
  voucherInfo: {
    padding: 12,
  },
  voucherTitleSmall: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  voucherPoints: {
    fontSize: 13,
    fontWeight: "bold",
    color: ACTIVE_COLOR, // Use active color for points
    marginBottom: 12,
  },
  redeemButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#666",
  },
  redeemButtonDisabled: {
    borderColor: "#D0D0D0",
  },
  redeemButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  redeemButtonTextDisabled: {
    color: "#B0B0B0",
  },
});
