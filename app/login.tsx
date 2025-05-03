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
  ScrollView,
  Platform,
  Alert, // Import Alert
  ActivityIndicator // Import ActivityIndicator for loading state
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';

const portugalFlag = require('../assets/images/portugal_flag.png');

// --- Access the Environment Variable ---
// Make sure you restart your development server (Metro) after adding/changing .env
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;
// --------------------------------------

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleContinue = async () => {
    // Basic validation
    if (!mobileNumber || mobileNumber.length < 9) { // Example length validation
      Alert.alert('Invalid Input', 'Please enter a valid mobile number.');
      return;
    }
    if (!API_BASE_URL) {
       Alert.alert('Configuration Error', 'API URL is not configured. Please check environment variables.');
       return; // Stop if URL isn't set
    }


    setIsLoading(true); // Start loading

    const fullPhoneNumber = `+351${mobileNumber}`; // Prepend country code
    const endpoint = '/api/v1/user/createWithPhone';
    const url = `${API_BASE_URL}${endpoint}`;

    console.log(`Sending request to: ${url} with phone: ${fullPhoneNumber}`); // For debugging

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other required headers here (e.g., API keys if needed)
        },
        body: JSON.stringify({
          phoneNumber: fullPhoneNumber, // Ensure the key matches backend expectation
        }),
      });

      const responseData = await response.json(); // Attempt to parse JSON regardless of status

      if (response.ok) { // Checks if status code is 200-299
        console.log('API Success:', responseData);
        Alert.alert('Success', 'Request sent successfully! Check console for response.'); // Replace with actual navigation or next step
        // TODO: Navigate to OTP screen or handle success response
        // Example: router.push('/verify-otp');

      } else {
        console.error('API Error:', response.status, responseData);
        // Try to display a meaningful error from the backend response if available
        const errorMessage = responseData?.message || responseData?.error || `Request failed with status ${response.status}`;
        Alert.alert('Error', errorMessage);
      }

    } catch (error: any) {
      console.error('Network/Fetch Error:', error);
      Alert.alert('Request Failed', error.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading regardless of success or failure
    }
  };

  // Placeholder functions for other buttons (keep as before)
  const handleGoogleLogin = () => console.log('Google Login');
  const handleAppleLogin = () => console.log('Apple Login');
  const handleEmailLogin = () => console.log('Email Login');
  const handleGetHelp = () => console.log('Get Help');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView
         contentContainerStyle={styles.scrollViewContainer}
         keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {/* ... (Title, Label, Input Row - remain the same) ... */}
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
                editable={!isLoading} // Disable input while loading
              />
              <FontAwesome name="user" size={18} color="#888" style={styles.userIcon} />
            </View>
          </View>


          {/* Continue Button - Updated */}
          <TouchableOpacity
            style={[styles.continueButton, isLoading && styles.buttonDisabled]} // Optional: Style differently when loading
            onPress={handleContinue}
            activeOpacity={0.8}
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#FFFFFF" /> // Show loader
            ) : (
              <Text style={styles.continueButtonText}>Continue</Text> // Show text
            )}
          </TouchableOpacity>

          {/* ... (Divider, Social Options, Divider, Get Help - remain the same) ... */}
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
              disabled={isLoading} // Also disable social logins during main action
            >
              <AntDesign name="google" size={20} color="#DB4437" style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            {/* Apple Button */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleAppleLogin}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <AntDesign name="apple1" size={22} color="#000000" style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Continue with Apple</Text>
            </TouchableOpacity>

            {/* Email Button */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleEmailLogin}
              activeOpacity={0.7}
              disabled={isLoading}
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

// --- Styles ---
// Add a disabled style for the button (optional)
const styles = StyleSheet.create({
  // ... (all previous styles remain the same)
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
   buttonDisabled: { // Style for button when loading
     backgroundColor: '#555', // Example: Darker gray when disabled
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