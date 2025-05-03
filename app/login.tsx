// Inside app/login.tsx
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store"; // Import SecureStore
import { router } from "expo-router"; // Import router for navigation

const portugalFlag = require("../assets/images/portugal_flag.png");

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;
const USER_DATA_KEY = "userData"; // Key for storing user data in SecureStore

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to save user data
  async function saveUserData(userData: object) {
    try {
      await SecureStore.setItemAsync(USER_DATA_KEY, JSON.stringify(userData));
      console.log("User data saved securely.");
    } catch (error) {
      console.error("Failed to save user data:", error);
      Alert.alert("Storage Error", "Could not save user session.");
    }
  }

  const handleContinue = async () => {
    // Basic validation (optional for this flow, but good practice)
    // if (!mobileNumber || mobileNumber.length < 9) {
    //   Alert.alert('Invalid Input', 'Please enter a valid mobile number.');
    //   return;
    // }

    if (!API_BASE_URL) {
      Alert.alert(
        "Configuration Error",
        "API URL is not configured. Please check environment variables."
      );
      return;
    }

    setIsLoading(true);

    // Phone number is sent, but backend will ignore it
    const fullPhoneNumber = `+351${mobileNumber}`;
    const endpoint = "/api/v1/user/createWithPhone"; // Ensure this matches backend route
    const url = `${API_BASE_URL}${endpoint}`;

    console.log(`Sending request to: ${url} with phone: ${fullPhoneNumber}`);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: fullPhoneNumber,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("API Success - Received User Data:", responseData);

        // --- Store the received user data ---
        await saveUserData(responseData);
        // ------------------------------------

        Alert.alert(
          "Login Successful",
          `Welcome, ${responseData.name || "User"}!`
        ); // Or just proceed

        // --- Navigate to the main part of the app ---
        // Replace '/(tabs)' or '/home' with your actual main screen route
        // Using 'replace' prevents going back to the login screen
        router.replace("/(tabs)"); // Example: Navigate to tabs layout
        // -------------------------------------------
      } else {
        console.error("API Error:", response.status, responseData);
        const errorMessage =
          responseData?.message ||
          responseData?.error ||
          `Request failed with status ${response.status}`;
        Alert.alert("Login Failed", errorMessage);
      }
    } catch (error: any) {
      console.error("Network/Fetch Error:", error);
      Alert.alert(
        "Request Failed",
        error.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // ... (rest of the component: placeholders, JSX, styles remain the same)
  // Placeholder functions for other buttons
  const handleGoogleLogin = () => console.log("Google Login");
  const handleAppleLogin = () => console.log("Apple Login");
  const handleEmailLogin = () => console.log("Email Login");
  const handleGetHelp = () => console.log("Get Help");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Get started with BrewPoints</Text>
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputRow}>
            <TouchableOpacity style={styles.countryPicker}>
              <Image
                source={portugalFlag}
                style={styles.flag}
                resizeMode="contain"
              />
              <AntDesign name="caretdown" size={12} color="#666" />
            </TouchableOpacity>
            <View style={styles.mobileInputContainer}>
              <Text style={styles.countryCode}>+351</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Mobile Number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                maxLength={9}
                editable={!isLoading}
              />
              <FontAwesome
                name="user"
                size={18}
                color="#888"
                style={styles.userIcon}
              />
            </View>
          </View>

          <TouchableOpacity
            style={[styles.continueButton, isLoading && styles.buttonDisabled]}
            onPress={handleContinue}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text style={styles.continueButtonText}>Continue</Text>
            )}
          </TouchableOpacity>

          {/* Dividers and Social Buttons */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.socialOptionsContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleGoogleLogin}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <AntDesign
                name="google"
                size={20}
                color="#DB4437"
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleAppleLogin}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <AntDesign
                name="apple1"
                size={22}
                color="#000000"
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleEmailLogin}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <Entypo
                name="mail"
                size={20}
                color="#555"
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Continue with email</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>
          <TouchableOpacity
            style={styles.getHelpButton}
            onPress={handleGetHelp}
            activeOpacity={0.7}
            disabled={isLoading}
          >
            <FontAwesome name="question-circle" size={18} color="#555" />
            <Text style={styles.getHelpText}>Get help</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles --- (remain unchanged from previous version)
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollViewContainer: { flexGrow: 1, justifyContent: "center" },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    color: "#555",
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  countryPicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginRight: 10,
    minHeight: 55,
  },
  flag: { width: 24, height: 18, marginRight: 8 },
  mobileInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 15,
    minHeight: 55,
  },
  countryCode: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginRight: 8,
  },
  textInput: { flex: 1, fontSize: 14, color: "#333", height: "100%" },
  userIcon: { marginLeft: 8 },
  continueButton: {
    backgroundColor: "#000000",
    borderRadius: 12,
    paddingVertical: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    minHeight: 50,
  },
  continueButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
  buttonDisabled: { backgroundColor: "#555" },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: "#E0E0E0" },
  dividerText: { fontSize: 14, color: "#888", marginHorizontal: 15 },
  socialOptionsContainer: { width: "100%", marginBottom: 15 },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingVertical: 15,
    width: "100%",
    marginBottom: 12,
    minHeight: 55,
  },
  socialIcon: { marginRight: 12 },
  socialButtonText: { fontSize: 14, fontWeight: "500", color: "#333" },
  getHelpButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  getHelpText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
});
