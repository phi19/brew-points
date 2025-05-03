// Inside app/index.tsx
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  LogBox
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router"; // Import the router

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

// Make sure the path to your image is correct
const backgroundImage = require("../assets/images/coffee_background.png");

export default function IndexScreen() {
  // This is the component for your home screen content

  const handleGetStarted = () => {
    // Use router.push to navigate to the '/login' route
    // This corresponds to the app/login.tsx file
    router.push("/login");
  };

  return (
    <View style={styles.fullScreenContainer}>
      <StatusBar style="light" />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={[
            "rgba(0,0,0,0.0)",
            "rgba(0,0,0,0.6)",
            "rgba(0,0,0,0.9)",
            "rgba(0,0,0,1.0)",
          ]}
          locations={[0, 0.4, 0.7, 1.0]}
          style={styles.gradient}
        />
        <SafeAreaView style={styles.contentArea}>
          <View style={styles.spacer} />
          <View style={styles.textButtonContainer}>
            <Text style={styles.title}>
              Discover, Order & Enjoy – The Smart Way to Coffee.
            </Text>
            <Text style={styles.subtitle}>
              All your favorite cafés, one cozy app. Order ahead & skip the
              wait.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleGetStarted} // onPress now calls the updated function
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

// Styles remain the same as before
const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "70%",
  },
  contentArea: {
    flex: 1,
    justifyContent: "flex-end",
  },
  spacer: {
    flex: 1,
  },
  textButtonContainer: {
    paddingHorizontal: 30,
    paddingBottom: Platform.OS === "ios" ? 20 : 40,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#A2A2A2",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#C67C4E",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 55,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
