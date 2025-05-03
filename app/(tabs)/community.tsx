// Inside app/(tabs)/notifications.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications Screen</Text>
      {/* You can build the actual Notifications screen UI here later */}
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