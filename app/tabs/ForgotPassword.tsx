// app/tabs/ForgotPassword.tsx
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }
    // Placeholder for password reset logic (e.g., API call)
    Alert.alert('Success', 'If an account exists for this email, a password reset link has been sent.');
    setEmail('');
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center px-6">
      <Text className="text-2xl font-[ManropeBold] text-center text-gray-800 mb-6">
        Forgot Password
      </Text>
      <Text className="text-base font-[ManropeRegular] text-center text-gray-600 mb-6">
        Enter your email address to receive a password reset link.
      </Text>
      
      <TextInput
        className="bg-white border border-gray-300 rounded-lg p-3 mb-4 text-gray-800 font-[ManropeRegular]"
        placeholder="Email"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TouchableOpacity
        className="bg-blue-600 rounded-lg p-3 mb-4"
        onPress={handleResetPassword}
      >
        <Text className="text-white text-center font-[ManropeSemiBold]">
          Send Reset Link
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        className="p-3"
        onPress={() => router.back()}
      >
        <Text className="text-blue-600 text-center font-[ManropeSemiBold]">
          Back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;