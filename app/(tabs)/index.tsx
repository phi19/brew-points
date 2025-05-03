// Inside app/index.tsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function IndexScreen() {
  // This is the component for your home screen content
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
    </View>
  );
}

// Basic styles to center the text
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up full screen height
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#fff", // Optional: Set a background color
  },
  text: {
    fontSize: 24, // Make text larger
    fontWeight: "bold", // Make text bold
  },
});
