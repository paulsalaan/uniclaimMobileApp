import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/types/navigation";

export default function Login() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white px-6 justify-center">
      {/* Logo and Header */}
      <View className="items-center mb-10">
        <Image
          source={require("../../assets/images/uniclaimlogo.png")}
          resizeMode="contain"
          className="w-20 h-20 mb-3"
        />
        <Text className="text-3xl font-bold text-black">Welcome Back</Text>
        <Text className="text-sm text-gray-500 mt-1">
          Sign in to continue to UniClaim
        </Text>
      </View>

      {/* Form */}
      <View className="space-y-5">
        {/* Email */}
        <View>
          <Text className="text-sm font-medium text-black mb-2">Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            className="bg-gray-100 border border-gray-300 rounded-xl px-4 h-12 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-300"
          />
        </View>

        {/* Password */}
        <View>
          <Text className="text-sm font-medium text-black mb-2">Password</Text>
          <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-xl px-4 h-12 focus:border-teal-500 focus:ring-2 focus:ring-teal-300">
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              className="flex-1 text-sm"
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Eye style={{ width: 20, height: 20, color: "#999" }} />
              ) : (
                <EyeOff style={{ width: 20, height: 20, color: "#999" }} />
              )}
            </Pressable>
          </View>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity className="mt-1 self-end">
          <Text className="text-xs text-gray-600">Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity className="mt-10 bg-teal-500 py-3.5 rounded-xl items-center shadow-lg" onPress={() => navigation.navigate("RootBottomTabs")}>
        <Text className="text-white text-base font-semibold">Login</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className="my-6" />

      {/* Create Account */}
      <View className="flex-row justify-center">
        <Text className="text-sm text-gray-700">New to UniClaim? </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text className="text-sm text-teal-600 font-semibold underline">
            Create an account
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
