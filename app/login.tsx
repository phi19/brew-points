// Inside app/login.tsx
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView, // Use ScrollView if content might exceed screen height
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons'; // Import icon families

// Assume you have these images in assets/images
// If not, replace with placeholders or remove Image component
const portugalFlag = require('../assets/images/portugal_flag.png');
// const googleLogo = require('../assets/images/google_logo.png');
// const appleLogo = require('../assets/images/apple_logo.png');

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState('');

  // Placeholder functions for button presses
  const handleContinue = () => console.log('Continue Pressed', mobileNumber);
  const handleGoogleLogin = () => console.log('Google Login');
  const handleAppleLogin = () => console.log('Apple Login');
  const handleEmailLogin = () => console.log('Email Login');
  const handleGetHelp = () => console.log('Get Help');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      {/* Wrap content in ScrollView in case of smaller screens */}
      <ScrollView
         contentContainerStyle={styles.scrollViewContainer}
         keyboardShouldPersistTaps="handled" // Dismiss keyboard when tapping outside input
      >
        <View style={styles.container}>
          {/* Title */}
          <Text style={styles.title}>Get started with BrewPoints</Text>

          {/* Mobile Number Label */}
          <Text style={styles.label}>Mobile Number</Text>

          {/* Input Row */}
          <View style={styles.inputRow}>
            {/* Country Picker Placeholder */}
            <TouchableOpacity style={styles.countryPicker}>
              <Image source={portugalFlag} style={styles.flag} resizeMode="contain" />
              <AntDesign name="caretdown" size={12} color="#666" />
            </TouchableOpacity>

            {/* Mobile Number Input */}
            <View style={styles.mobileInputContainer}>
              <Text style={styles.countryCode}>+351</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Mobile Number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                maxLength={9} // Example: Limit length for Portuguese numbers
              />
              {/* User Icon - Placeholder, adjust styling as needed */}
              <FontAwesome name="user" size={18} color="#888" style={styles.userIcon} />
            </View>
          </View>

          {/* Continue Button */}
      <StatusBar style="auto" />
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social/Email Login Options */}
          <View style={styles.socialOptionsContainer}>
            {/* Google Button */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleGoogleLogin}
              activeOpacity={0.7}
            >
              <AntDesign name="google" size={20} color="#DB4437" style={styles.socialIcon} />
              {/* OR use Image: <Image source={googleLogo} style={styles.socialImage} /> */}
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            {/* Apple Button */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleAppleLogin}
              activeOpacity={0.7}
            >
              <AntDesign name="apple1" size={22} color="#000000" style={styles.socialIcon} />
              {/* OR use Image: <Image source={appleLogo} style={styles.socialImage} /> */}
              <Text style={styles.socialButtonText}>Continue with Apple</Text>
            </TouchableOpacity>

            {/* Email Button */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleEmailLogin}
              activeOpacity={0.7}
            >
              <Entypo name="mail" size={20} color="#555" style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Continue with email</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Get Help */}
          <TouchableOpacity
            style={styles.getHelpButton}
            onPress={handleGetHelp}
            activeOpacity={0.7}
          >
            <FontAwesome name="question-circle" size={18} color="#555" />
            <Text style={styles.getHelpText}>Get help</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the screen
  },
   scrollViewContainer: {
    flexGrow: 1, // Ensure content can scroll if needed
    justifyContent: 'center', // Center content vertically if it doesn't fill screen
  },
  container: {
    flex: 1, // Take available space within ScrollView/SafeAreaView
    paddingHorizontal: 24,
    paddingVertical: 20, // Add some vertical padding
    justifyContent: 'center', // Distribute space between elements
    alignItems: 'center', // Center items horizontally by default where applicable
  },
  title: {
    fontSize: 18,
    fontWeight: '600', // Semibold
    color: '#333',
    marginBottom: 30, // Space below title
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#555',
    alignSelf: 'flex-start', // Align label to the left
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20, // Space below input row
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5', // Light gray background
    borderWidth: 1,
    borderColor: '#E0E0E0', // Light border color
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 15, // Adjust padding for height
    marginRight: 10, // Space between picker and input
    minHeight: 55, // Match height of input
  },
  flag: {
    width: 24,
    height: 18, // Adjust aspect ratio for flag
    marginRight: 8,
  },
  mobileInputContainer: {
    flex: 1, // Take remaining width
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 15,
    minHeight: 55, // Standard height
  },
  countryCode: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginRight: 8,
  },
  textInput: {
    flex: 1, // Take available space in the container
    fontSize: 14,
    color: '#333',
    height: '100%', // Fill height of container
  },
  userIcon: {
     marginLeft: 8, // Space before the icon
  },
  continueButton: {
    backgroundColor: '#000000', // Black background
    borderRadius: 12,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25, // Space below button
    minHeight: 50,
  },
  continueButtonText: {
    color: '#FFFFFF', // White text
    fontSize: 16,
    fontWeight: '600', // Semibold
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20, // Space around dividers
  },
  dividerLine: {
    flex: 1, // Take available space
    height: 1,
    backgroundColor: '#E0E0E0', // Light gray line
  },
  dividerText: {
    fontSize: 14,
    color: '#888', // Gray text
    marginHorizontal: 15, // Space around "or"
  },
  socialOptionsContainer: {
    width: '100%',
    marginBottom: 15, // Space below social options
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // White background
    borderWidth: 1,
    borderColor: '#E0E0E0', // Light border
    borderRadius: 12,
    paddingVertical: 15,
    width: '100%',
    marginBottom: 12, // Space between social buttons
    minHeight: 55,
  },
   socialIcon: {
     marginRight: 12, // Space between icon and text
   },
  // socialImage: { // If using Image component for logos
  //   width: 20,
  //   height: 20,
  //   marginRight: 12,
  // },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '500', // Medium weight
    color: '#333',
  },
  getHelpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10, // Clickable area
  },
  getHelpText: {
    marginLeft: 8, // Space between icon and text
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
});