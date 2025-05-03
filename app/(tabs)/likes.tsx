// Inside app/(tabs)/likes.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function LikesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Likes Screen</Text>
      {/* You can build the actual Likes screen UI here later */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Optional: Set a background color
  },
  text: {
    fontSize: 18,
  },
});