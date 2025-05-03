// Inside app/(tabs)/home.tsx
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  Platform,
  Alert,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import { StatusBar } from "expo-status-bar";

// --- Constants and Types ---
const USER_DATA_KEY = "userData";
const ACTIVE_CATEGORY_COLOR = "#C67C4E";
const INACTIVE_CATEGORY_COLOR = "#F5F5F5"; // Or a light gray
const ACTIVE_TEXT_COLOR = "#FFFFFF";
const INACTIVE_TEXT_COLOR = "#333333";

interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  // Add location if it's part of the user object, otherwise fetch/set separately
  location?: {
    city: string;
    country: string;
  };
  // Add other fields as needed
}

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL; // Ensure this is set in .env

const bannerImage = require("../../assets/images/coffee_banner.png"); // Replace with your banner image

// --- Components ---

interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  // Location should now be part of the user object
  location?: {
    city: string;
    country: string;
  };
}

// --- Define Shop Type ---
interface Shop {
  id: string;
  name: string;
  category: string; // Or categories array
  description: string;
  rating: number;
  image: string; // This will be a URL
}

// Coffee Item Card
const ShopCard = ({ item }: { item: Shop }) => (
  <View style={styles.card}>
    <View style={styles.imageContainer}>
      {/* Use Image source={{ uri: ... }} for network images */}
      <Image
        source={{ uri: item.image }}
        style={styles.coffeeImage}
        resizeMode="cover"
      />
      {item.rating ? ( // Conditionally render rating if available
        <View style={styles.ratingBadge}>
          <FontAwesome name="star" size={10} color="#FBBE21" />
          <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
        </View>
      ) : null}
    </View>
    <Text style={styles.coffeeName}>{item.name}</Text>
    <Text style={styles.coffeeType}>{item.description} </Text>
    {/* Use description */}
    <View style={styles.priceRow}>
      {/* Replace price with something else or remove if shops don't have a single price */}
      <Text style={styles.priceText}>{item.category}</Text>
      <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add" size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  </View>
);

const ACTIVE_COLOR = "#C67C4E"; // Brownish color from image

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [shops, setShops] = useState<Shop[]>([]); // State for shops
  const [isLoadingUser, setIsLoadingUser] = useState(true); // Loading state for user
  const [isLoadingShops, setIsLoadingShops] = useState(true); // Loading state for shops
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Coffee"); // Keep static categories for now

  const categories = [
    "All Coffee",
    "Café",
    "Coffee Shop",
    "Roastery & Café",
    "Bistro",
  ];

  useEffect(() => {
    const loadInitialData = async () => {
      // Load User Data
      setIsLoadingUser(true);
      try {
        const userDataString = await SecureStore.getItemAsync(USER_DATA_KEY);
        if (userDataString) {
          setUser(JSON.parse(userDataString)); // Location is part of this object now
        } else {
          console.warn("User data not found in secure store.");
          // Optional: Redirect to login if no user data?
          // router.replace('/login');
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      } finally {
        setIsLoadingUser(false);
      }

      // Load Shops Data
      if (!API_BASE_URL) {
        Alert.alert("Configuration Error", "API URL not configured.");
        setIsLoadingShops(false);
        return; // Stop if URL isn't set
      }

      setIsLoadingShops(true);
      try {
        const endpoint = "/api/v1/shop/findAll"; // Ensure this matches backend route
        const url = `${API_BASE_URL}${endpoint}`;

        console.log(`Sending request to: ${url}`);

        const response = await fetch(url, {
          method: "POST",
        }); // Fetch shops

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Shop[] = await response.json();
        setShops(data);
      } catch (error: any) {
        console.error("Failed to fetch shops:", error);
        Alert.alert(
          "Error Fetching Shops",
          error.message || "Could not load shop data."
        );
        setShops([]); // Set empty array on error
      } finally {
        setIsLoadingShops(false);
      }
    };

    loadInitialData();
  }, []); // Runs once on mount

  // --- Update Filtering Logic ---
  // Adjust filtering based on shop properties (e.g., category or name)
  const filteredShops =
    activeCategory === "All Coffee"
      ? shops
      : shops.filter(
          (shop) =>
            shop.category
              .toLowerCase()
              .includes(activeCategory.toLowerCase()) ||
            shop.name.toLowerCase().includes(activeCategory.toLowerCase())
        );
  // ----------------------------

  // Combined loading state check
  if (isLoadingUser || isLoadingShops) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={ACTIVE_COLOR} />
      </View>
    );
  }

  // --- Location is read directly from the user state ---
  const userName = user?.name?.split(" ")[0] || "User";
  const locationCity = user?.location?.city || "Set Location"; // Default if somehow missing
  const locationCountry = user?.location?.country || "";
  // ---------------------------------------------------

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" /> {/* Status bar style for dark header */}
      <ScrollView
        style={styles.scrollView}
        stickyHeaderIndices={[]} // Make the header section below the top info sticky
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        directionalLockEnabled={true}
      >
        {/* --- Top User Info Section (Not Sticky) --- */}
        <View style={styles.topInfoContainer}>
          <View>
            <Text style={styles.greetingText}>Hello, {userName}!</Text>
          </View>
          <TouchableOpacity style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Location</Text>
            <Text style={styles.locationText}>
              {locationCity}, {locationCountry}
            </Text>
            <Ionicons
              name="chevron-down"
              size={16}
              color="#E0E0E0"
              style={styles.locationIcon}
            />
          </TouchableOpacity>
        </View>

        {/* --- Sticky Header Section --- */}
        <View style={styles.stickyHeaderBackground}>
          {/* Search and Filter */}
          <View style={styles.searchFilterRow}>
            <View style={styles.searchContainer}>
              <Ionicons
                name="search"
                size={20}
                color="#999"
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search BrewPoints"
                placeholderTextColor="#999"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <MaterialCommunityIcons
                name="tune-variant"
                size={24}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>

          {/* Promo Banner */}
          <View style={styles.bannerContainer}>
            <ImageBackground
              source={bannerImage}
              style={styles.bannerImage}
              imageStyle={styles.bannerImageStyle}
            >
              <View style={styles.bannerTextContainer}>
                <View style={styles.loyaltyTag}>
                  <Text style={styles.loyaltyText}>Loyalty Program</Text>
                </View>
                <Text style={styles.bannerTitle}>
                  Redeem your{"\n"}points here
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        {/* --- Main Content Area (Below Sticky Header) --- */}
        <View style={styles.mainContent}>
          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScrollView}
            contentContainerStyle={styles.categoryContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  {
                    backgroundColor:
                      activeCategory === category
                        ? ACTIVE_CATEGORY_COLOR
                        : INACTIVE_CATEGORY_COLOR,
                  },
                ]}
                onPress={() => setActiveCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    {
                      color:
                        activeCategory === category
                          ? ACTIVE_TEXT_COLOR
                          : INACTIVE_TEXT_COLOR,
                    },
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Coffee List */}
          <FlatList
            data={filteredShops} // Use filteredShops state
            renderItem={({ item }) => {
              console.log(item, 1491)
              return <ShopCard item={item} />;
            }}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false} // Disable FlatList scrolling, rely on ScrollView
            columnWrapperStyle={styles.listColumnWrapper} // Style for space between columns
            contentContainerStyle={styles.listContentContainer} // Padding at the bottom
            ListEmptyComponent={
              <Text style={styles.emptyListText}>
                {shops.length === 0
                  ? !isLoadingShops
                    ? "No shops available right now."
                    : `No results found for "${activeCategory}"`
                  : null}
              </Text>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles --- (Extensive styling to match the image)
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#313131", // Dark background for the top area
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background for the main content
  },
  topInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    // paddingTop: Platform.OS === 'android' ? 15 : 10, // Keep original top padding
    paddingBottom: 15,
    backgroundColor: "#313131",
    // --- Add this line ---
    paddingTop: Platform.OS === "android" ? 65 : 10, // Adjust top padding
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  locationContainer: {
    alignItems: "flex-end", // Align text to the right
  },
  locationLabel: {
    fontSize: 12,
    color: "#BDBDBD", // Lighter gray
    marginBottom: 2,
  },
  locationText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E0E0E0", // Slightly lighter white
    textAlign: "right",
    paddingRight: 7,
  },
  locationIcon: {
    position: "absolute",
    right: -10, // Position icon slightly outside text
    bottom: 0,
  },
  stickyHeaderBackground: {
    backgroundColor: "#313131", // Dark background for the sticky part
    paddingBottom: 20, // Space below banner
  },
  searchFilterRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3F3F3F", // Slightly lighter dark shade for input bg
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: ACTIVE_COLOR, // Brownish color
    borderRadius: 12,
    padding: 12,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContainer: {
    paddingHorizontal: 20,
  },
  bannerImage: {
    height: 150, // Adjust height as needed
    justifyContent: "center",
    borderRadius: 16, // Apply border radius to the ImageBackground itself if possible, or the container
    overflow: "hidden", // Ensure content respects the border radius
  },
  bannerImageStyle: {
    borderRadius: 16, // Apply border radius to the image content
  },
  bannerTextContainer: {
    paddingLeft: 20,
  },
  loyaltyTag: {
    backgroundColor: "#EF5350", // Reddish tag color
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start", // Keep tag to the left
    marginBottom: 8,
  },
  loyaltyText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    lineHeight: 34,
    // Add text shadow if needed for better contrast
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  mainContent: {
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF", // Ensure main area is white
    paddingTop: 20, // Space between banner and categories
  },
  categoryScrollView: {
    marginBottom: 20,
  },
  categoryContainer: {
    paddingRight: 20, // Ensure last category isn't cut off
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
  },
  listColumnWrapper: {
    justifyContent: "space-between", // Add space between the two columns
  },
  listContentContainer: {
    paddingBottom: 100, // Ensure space for tab bar and scrolling past last row
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 20,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: "relative", // Needed for absolute positioning of badge
  },
  coffeeImage: {
    width: "100%",
    height: 130,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#eee", // Add a placeholder background
  },
  ratingBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  ratingText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
    marginLeft: 4,
  },
  coffeeName: {
    // Keep name or rename to shopName
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginHorizontal: 12,
  },
  coffeeType: {
    // Keep name or rename to shopDescription/shopCategory
    fontSize: 12,
    color: "#888",
    marginTop: 2,
    marginBottom: 10,
    marginHorizontal: 12,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    marginBottom: 12,
  },
  priceText: {
    // Used for category display now
    fontSize: 14, // Adjusted size maybe
    fontWeight: "500",
    color: "#555", // Adjusted color maybe
    flexShrink: 1, // Allow text to shrink if name is long
    marginRight: 5,
  },
  addButton: {
    backgroundColor: ACTIVE_COLOR,
    borderRadius: 8,
    padding: 8,
  },
  emptyListText: {
    textAlign: "center",
    marginTop: 30,
    color: "#888",
    paddingHorizontal: 20, // Add padding so text wraps nicely
  },
});
