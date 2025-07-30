import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/types/navigation";

export default function Register() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white px-6 justify-center">
      {/* Header Logo */}
      <View className="items-center mb-8">
        <Image
          source={require("../../assets/images/uniclaimlogo.png")}
          resizeMode="contain"
          className="w-20 h-20 mb-3"
        />
        <Text className="text-4xl font-albert-bold text-black mb-2">
          Create Account
        </Text>
        <Text className="text-base font-manrope-medium text-zinc-500 mt-1">
          Sign up to get started
        </Text>
      </View>

      {/* Form Fields */}
      <View className="space-y-4">
        {/* First Name */}
        <View>
          <Text className="text-base font-medium text-black mb-2 font-manrope-medium">
            First Name
          </Text>
          <TextInput
            placeholder="Enter first name"
            placeholderTextColor="#747476"
            value={firstName}
            onChangeText={setFirstName}
            style={{
              fontFamily: "ManropeRegular",
              fontSize: 15,
            }}
            className="bg-gray-100 border border-gray-300 rounded-lg px-5 h-[3.5rem] text-black"
          />
        </View>

        {/* Last Name */}
        <View>
          <Text className="text-base font-medium text-black mb-2 font-manrope-medium">
            Last Name
          </Text>
          <TextInput
            placeholder="Enter last name"
            placeholderTextColor="#747476"
            value={lastName}
            onChangeText={setLastName}
            style={{
              fontFamily: "ManropeRegular",
              fontSize: 15,
            }}
            className="bg-gray-100 border border-gray-300 rounded-lg px-5 h-[3.5rem] text-black"
          />
        </View>

        {/* Email */}
        <View>
          <Text className="text-base font-medium text-black mb-2 font-manrope-medium">
            Email
          </Text>
          <TextInput
            placeholder="Enter email"
            placeholderTextColor="#747476"
            value={email}
            onChangeText={setEmail}
            style={{
              fontFamily: "ManropeRegular",
              fontSize: 15,
            }}
            className="bg-gray-100 border border-gray-300 rounded-lg px-5 h-[3.5rem] text-black"
          />
        </View>

        {/* Password */}
        <View>
          <Text className="text-base font-medium text-black mb-2 font-manrope-medium">
            Password
          </Text>
          <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-lg px-4 h-[3.5rem]">
            <TextInput
              placeholder="Enter password"
              placeholderTextColor="#747476"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={{
                fontFamily: "ManropeRegular",
                fontSize: 15,
              }}
              className="flex-1 text-black"
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color="#000"
              />
            </Pressable>
          </View>
        </View>

        {/* Confirm Password */}
        <View>
          <Text className="text-base font-medium text-black mb-2 font-manrope-medium">
            Confirm Password
          </Text>
          <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-lg px-4 h-[3.5rem]">
            <TextInput
              placeholder="Re-enter password"
              placeholderTextColor="#747476"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={{
                fontFamily: "ManropeRegular",
                fontSize: 15,
              }}
              className="flex-1 text-black"
            />
            <Pressable
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye" : "eye-off"}
                size={20}
                color="#000"
              />
            </Pressable>
          </View>
        </View>
      </View>

      {/* Register Button */}
      <TouchableOpacity className="bg-brand flex items-center justify-center py-4 rounded-xl mt-6">
        <Text className="text-white text-lg font-semibold font-manrope-medium">
          Register
        </Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <View className="flex-row justify-center mt-6">
        <Text className="text-base text-gray-700 font-manrope-medium">
          Already have an account?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text className="text-base font-bold text-teal-600 underline font-manrope-medium">
            Login Here
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
