import type { RootStackParamList } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <SafeAreaView className="flex-1 justify-center bg-white px-6">
      {/* Logo and Header */}
      <View className="items-center mb-10">
        <Image
          source={require("../../assets/images/uniclaimlogo.png")}
          resizeMode="contain"
          className="w-20 h-20 mb-3"
        />
        <Text className="text-4xl font-albert-bold text-black mb-2">
          Welcome Back
        </Text>
        <Text className="text-base font-manrope-medium text-zinc-500 mt-1">
          Sign in to continue to UniClaim
        </Text>
      </View>

      {/* Form */}
      <View className="">
        {/* Email */}
        <View>
          <Text className="text-base font-medium text-black mb-2 font-manrope-medium">
            Email
          </Text>
          <TextInput
            placeholder="Enter email"
            placeholderTextColor="#747476"
            style={{
              fontFamily: "ManropeRegular", // applies only to input text
              fontSize: 15,
            }}
            value={email}
            onChangeText={setEmail}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            className={`bg-gray-100 border rounded-lg px-5 h-[3.5rem] text-base text-black font-manrope ${
              emailFocused ? "border-teal-500" : "border-gray-300"
            }`}
          />
        </View>

        {/* Password */}
        <View>
          <Text className="mt-5 text-base font-medium mb-2 font-manrope-medium">
            Password
          </Text>
          <View
            className={`flex-row items-center bg-gray-100 rounded-lg px-4 h-[3.5rem] ${
              passwordFocused ? "border-teal-500" : "border-gray-300"
            } border`}
          >
            <TextInput
              placeholder="Enter password"
              placeholderTextColor="#747476"
              style={{
                fontFamily: "ManropeRegular", // applies only to input text
                fontSize: 15,
              }} // red-500
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              secureTextEntry={!showPassword}
              className="flex-1 text-base"
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color="#000000"
              />
            </Pressable>
          </View>
        </View>

        <TouchableOpacity
          className="mt-5 self-end"
          onPress={() => navigation.navigate("Register")} // <-- change this to your route
        >
          <Text className="text-sm font-manrope-medium text-teal-600 underline">
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        className="bg-brand flex items-center justify-center py-4 rounded-xl mb-3 mt-6"
        onPress={() => navigation.navigate("RootBottomTabs")}
      >
        <Text className="text-white text-lg font-semibold font-manrope-medium">
          Login
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className="my-5" />

      {/* Create Account */}
      <View className="flex-row justify-center">
        <Text className="text-base text-gray-700 font-manrope-medium">
          New to UniClaim?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text className="text-base font-manrope-medium text-teal-600 font-semibold underline">
            Register here
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
