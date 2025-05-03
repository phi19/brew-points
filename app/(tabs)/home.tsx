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

// --- Dummy Data (Replace with API calls later) ---
const categories = ["All Coffee", "Machiato", "Latte", "Americano", "Espresso"];

const coffeeItems = [
  {
    id: "1",
    name: "Caffe Mocha",
    type: "Deep Foam",
    price: "4.53",
    rating: 4.8,
    image: require("../../assets/images/coffee_banner.png"),
  }, // Replace with actual image paths
  {
    id: "2",
    name: "Flat White",
    type: "Espresso",
    price: "3.53",
    rating: 4.8,
    image: require("../../assets/images/coffee_banner.png"),
  },
  {
    id: "3",
    name: "Cappuccino",
    type: "Foamy",
    price: "4.20",
    rating: 4.9,
    image: require("../../assets/images/coffee_banner.png"),
  },
  {
    id: "4",
    name: "Latte",
    type: "Milky",
    price: "4.00",
    rating: 4.7,
    image: require("../../assets/images/coffee_banner.png"),
  },
  // Add more items
];

const bannerImage = require("../../assets/images/coffee_banner.png"); // Replace with your banner image

// --- Components ---

// Coffee Item Card
const CoffeeCard = ({ item }: { item: (typeof coffeeItems)[0] }) => (
  <View style={styles.card}>
    <View style={styles.imageContainer}>
      <Image
        source={item.image}
        style={styles.coffeeImage}
        resizeMode="cover"
      />
      <View style={styles.ratingBadge}>
        <FontAwesome name="star" size={10} color="#FBBE21" />
        <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
      </View>
    </View>
    <Text style={styles.coffeeName}>{item.name}</Text>
    <Text style={styles.coffeeType}>{item.type}</Text>
    <View style={styles.priceRow}>
      <Text style={styles.priceText}>$ {item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add" size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  </View>
);

const ACTIVE_COLOR = "#C67C4E"; // Brownish color from image

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to 'All Coffee'

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userDataString = await SecureStore.getItemAsync(USER_DATA_KEY);
        if (userDataString) {
          const parsedUser = JSON.parse(userDataString);
          // --- Set a default location if not present ---
          if (!parsedUser.location) {
            parsedUser.location = { city: "Coimbra", country: "Portugal" }; // Default for display
          }
          // -------------------------------------------
          setUser(parsedUser);
        } else {
          console.warn("User data not found in secure store.");
          // Handle case where user data is missing (e.g., navigate back to login?)
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Filter logic (basic example, refine as needed)
  const filteredCoffeeItems =
    activeCategory === "All Coffee"
      ? coffeeItems
      : coffeeItems.filter(
          (item) =>
            item.type.toLowerCase().includes(activeCategory.toLowerCase()) ||
            item.name.toLowerCase().includes(activeCategory.toLowerCase())
        );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={ACTIVE_COLOR} />
      </View>
    );
  }

  // Extract user info safely
  const userName = user?.name?.split(" ")[0] || "User"; // Get first name or default
  const locationCity = user?.location?.city || "Unknown";
  const locationCountry = user?.location?.country || "Location";

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
            data={filteredCoffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false} // Disable FlatList scrolling, rely on ScrollView
            columnWrapperStyle={styles.listColumnWrapper} // Style for space between columns
            contentContainerStyle={styles.listContentContainer} // Padding at the bottom
            ListEmptyComponent={
              <Text style={styles.emptyListText}>
                No coffee found for {activeCategory}
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
    backgroundColor: "#FFFFFF", // Card background
    borderRadius: 16,
    marginBottom: 20,
    width: "48%", // Roughly half width minus gap
    // Add shadow for elevation (Platform specific)
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
    height: 130, // Adjust height as needed
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  ratingBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent background
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginHorizontal: 12,
  },
  coffeeType: {
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#2F2D2C", // Dark text for price
  },
  addButton: {
    backgroundColor: ACTIVE_COLOR, // Brownish color
    borderRadius: 8,
    padding: 8,
  },
  emptyListText: {
    textAlign: "center",
    marginTop: 30,
    color: "#888",
  },
});
