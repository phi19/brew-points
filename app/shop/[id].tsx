// Inside app/shop/[id].tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView, // Use SafeAreaView at the top level
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { useCart } from "@/contexts/CartContext"; // Import the

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;
const ACTIVE_COLOR = "#C67C4E"; // Re-define color or import from constants

// --- Interfaces (can share these via a types file later) ---
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface ShopDetails {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  image: string;
  distance: string;
  waitTime: string;
  offers: string[]; // Keywords like 'pastry', 'coffee-bean', 'milk'
  products: Product[];
}
// ---------------------------------------------------------

// --- Product Card Component (for the detail screen list) ---
const ProductCard = ({
  item,
  onAddToCart,
}: {
  item: Product;
  onAddToCart: () => void;
}) => (
  <View style={styles.productCard}>
    <Image
      source={{ uri: item.image }}
      style={styles.productImage}
      resizeMode="cover"
    />
    <Text style={styles.productName}>{item.name}</Text>
    <Text style={styles.productDescription}>{item.description}</Text>
    <View style={styles.productPriceRow}>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.productArrowButton} onPress={onAddToCart}>
        <MaterialCommunityIcons name="plus" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  </View>
);
// ---------------------------------------------------------

// --- Offer Icon Component ---
const OfferIcon = ({ type }: { type: string }) => {
  let iconName: any = "help-circle-outline"; // Default icon
  switch (type) {
    case "pastry":
      iconName = "food-croissant"; // Example using MaterialCommunityIcons
      break;
    case "coffee-bean":
      iconName = "coffee-maker"; // Example
      break;
    case "milk":
      iconName = "food-variant"; // Example (mdi has 'cup-water' or 'food-variant')
      break;
    // Add more cases based on keywords from your backend
  }
  return (
    <View style={styles.offerIconContainer}>
      <MaterialCommunityIcons name={iconName} size={22} color={ACTIVE_COLOR} />
    </View>
  );
};
// ---------------------------------------------------------

export default function ShopDetailScreen() {
  const { id: shopId } = useLocalSearchParams<{ id: string }>(); // Get the 'id' param
  const [shopDetails, setShopDetails] = useState<ShopDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchShopDetails = async () => {
      if (!shopId) {
        setError("Shop ID is missing.");
        setIsLoading(false);
        return;
      }
      if (!API_BASE_URL) {
        Alert.alert("Configuration Error", "API URL not configured.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        const endpoint = "/api/v1/shop/findById";
        const url = `${API_BASE_URL}${endpoint}`;

        console.log(`Fetching details for shop ID: ${shopId} from ${url}`);

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: shopId }), // Send ID in the body
        });

        const responseText = await response.text(); // Get text first for debugging
        console.log("Raw FindByID Response Status:", response.status);
        console.log("Raw FindByID Response Text:", responseText);

        if (!response.ok) {
          // Try parsing error message if available
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            const errorData = JSON.parse(responseText);
            errorMessage = errorData.message || errorMessage;
          } catch (e) {}
          throw new Error(errorMessage);
        }

        const data: ShopDetails = JSON.parse(responseText); // Parse the response
        setShopDetails(data);
      } catch (err: any) {
        console.error("Failed to fetch shop details:", err);
        setError(err.message || "Failed to load shop details.");
        setShopDetails(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShopDetails();
  }, [shopId]); // Re-fetch if the id changes

  const handleAddToCart = (product: Product) => {
    if (!shopId) {
      console.error("Shop ID is missing, cannot add to cart.");
      return; // Should not happen if shopDetails loaded
    }
    addToCart(product, shopId);
    // Optional: Add feedback like a toast message
    // Example: Toast.show({ type: 'success', text1: `${product.name} added to cart!` });
    console.log(
      `Attempting to add ${product.name} from shop ${shopId} to cart.`
    );
  };

  // --- Render Logic ---
  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={ACTIVE_COLOR} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!shopDetails) {
    return (
      <View style={styles.centerContainer}>
        <Text>Shop not found.</Text>
      </View>
    );
  }

  // Render the main detail screen UI
  return (
    <SafeAreaView style={styles.detailSafeArea}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.detailScrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Large Shop Image */}
        <Image
          source={{ uri: shopDetails.image }}
          style={styles.shopHeaderImage}
        />

        {/* Shop Info Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.shopName}>{shopDetails.name}</Text>
          <View style={styles.subtitleRow}>
            <Text style={styles.subtitleText}>
              {shopDetails.distance} • {shopDetails.waitTime}
            </Text>
            <View style={styles.offerIconsRow}>
              {shopDetails.offers?.map((offerType, index) => (
                <OfferIcon key={index} type={offerType} />
              ))}
            </View>
          </View>
          <View style={styles.ratingRow}>
            <FontAwesome
              name="star"
              size={18}
              color="#FBBE21"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.ratingTextLarge}>
              {shopDetails.rating.toFixed(1)}
            </Text>
            <Text style={styles.reviewCountText}>
              {" "}
              ({shopDetails.reviewCount} reviews)
            </Text>
          </View>
        </View>

        {/* Product List */}
        <View style={styles.productListContainer}>
          <FlatList
            data={shopDetails.products}
            renderItem={({ item }) => (
              <ProductCard
                item={item}
                onAddToCart={() => handleAddToCart(item)}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false} // Handled by outer ScrollView
            columnWrapperStyle={styles.productlistColumnWrapper}
            ListEmptyComponent={
              <Text style={{ textAlign: "center", marginTop: 20 }}>
                No products available.
              </Text>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles for Detail Screen ---
const styles = StyleSheet.create({
  detailSafeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  detailScrollView: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
  shopHeaderImage: {
    width: "100%",
    height: 250, // Adjust height as desired
    borderBottomLeftRadius: 20, // Rounded corners at the bottom
    borderBottomRightRadius: 20,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 10,
  },
  shopName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 14,
    color: "#777",
  },
  offerIconsRow: {
    flexDirection: "row",
  },
  offerIconContainer: {
    backgroundColor: "#FDF5EE", // Light beige background for icons
    padding: 8,
    borderRadius: 10,
    marginLeft: 8,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingTextLarge: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  reviewCountText: {
    fontSize: 14,
    color: "#777",
    marginLeft: 4,
  },
  productListContainer: {
    paddingHorizontal: 20, // Match horizontal padding
    paddingBottom: 50, // Add padding at the bottom
  },
  productlistColumnWrapper: {
    justifyContent: "space-between",
  },
  // Styles for ProductCard
  productCard: {
    width: "48%", // Two columns with gap
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 15,
    // Add shadow/elevation if desired
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: {
    width: "100%",
    height: 110, // Adjust height
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#eee",
  },
  productName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginTop: 8,
    marginHorizontal: 10,
  },
  productDescription: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
    marginBottom: 8,
    marginHorizontal: 10,
  },
  productPriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  productArrowButton: {
    backgroundColor: ACTIVE_COLOR,
    borderRadius: 8,
    padding: 6,
  },
  // Reuse loading/error styles or define specific ones
  loadingContainer: {
    /* ... from home screen ... */
  },
});
