import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Eye, EyeOff } from "lucide-react-native";

export default function RegisterScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        className="px-6 pt-16 pb-10"
      >
        {/* Logo and Heading */}
        <View className="items-center mb-10">
          <Image
            source={require("../../assets/images/uniclaimlogo.png")}
            className="w-20 h-20 mb-3"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold text-gray-800">
            Create an account
          </Text>
          <Text className="text-sm text-gray-600 mt-1 text-center">
            Start your journey with UniClaim
          </Text>
        </View>

        {/* Form Fields */}
        <View className="space-y-5">
          {/* First Name */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-1">
              First Name
            </Text>
            <TextInput
              className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-900"
              placeholder="Enter first name"
              placeholderTextColor="#999"
            />
          </View>

          {/* Last Name */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-1">
              Last Name
            </Text>
            <TextInput
              className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-900"
              placeholder="Enter last name"
              placeholderTextColor="#999"
            />
          </View>

          {/* Email */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-1">
              Email
            </Text>
            <TextInput
              className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-900"
              placeholder="abcde@gmail.com"
              keyboardType="email-address"
              placeholderTextColor="#999"
            />
          </View>

          {/* Password */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-1">
              Password
            </Text>
            <View className="flex-row items-center bg-gray-100 rounded-lg px-3">
              <TextInput
                className="flex-1 py-3 text-sm text-gray-900"
                placeholder="Enter your password"
                secureTextEntry={!passwordVisible}
                placeholderTextColor="#999"
              />
              <Pressable
                onPress={() => setPasswordVisible(!passwordVisible)}
                className="p-2"
              >
                {passwordVisible ? (
                  <Eye size={20} color="#555" />
                ) : (
                  <EyeOff size={20} color="#555" />
                )}
              </Pressable>
            </View>
          </View>

          {/* Confirm Password */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </Text>
            <View className="flex-row items-center bg-gray-100 rounded-lg px-3">
              <TextInput
                className="flex-1 py-3 text-sm text-gray-900"
                placeholder="Re-enter your password"
                secureTextEntry={!confirmPasswordVisible}
                placeholderTextColor="#999"
              />
              <Pressable
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                className="p-2"
              >
                {confirmPasswordVisible ? (
                  <Eye size={20} color="#555" />
                ) : (
                  <EyeOff size={20} color="#555" />
                )}
              </Pressable>
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            className="bg-teal-600 py-3 rounded-lg items-center mt-2"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-white font-semibold text-base">
              Create an account
            </Text>
          </TouchableOpacity>

          {/* Login Link */}
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text className="text-center text-sm text-gray-700 mt-4">
              Already have an account?{" "}
              <Text className="text-teal-600 font-medium">Login</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
